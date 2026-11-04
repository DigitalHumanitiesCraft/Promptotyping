"""Browser regression tests for the introduction page under intro/ (A47).

Each test states an outcome a reader sees and derives its expectation from the page
contract in knowledge/design.md, section Introduction page, rather than from the layout
code: which files a step creates or changes, which prototype the step shows, where the
keyboard focus goes, which language the page speaks, and that narrow screens keep the
navigation and the page inside the viewport.

The tests need Python Playwright with Chromium and skip when it is missing, so tools/
keeps its standard-library rule. They serve the repository root on a free local port.

    python -m pytest intro/tests -q -p no:cacheprovider
"""

import functools
import http.server
import pathlib
import shutil
import subprocess
import threading
import unittest

try:
    from playwright.sync_api import sync_playwright
except ImportError:  # The suite is optional where Playwright is not installed.
    sync_playwright = None

ROOT = pathlib.Path(__file__).resolve().parents[2]

# The example's seven steps. Expected states follow the step texts in intro/content.js.
WRITE_BACK = {"knowledge/specification.md", "knowledge/design.md", "knowledge/verification.md", "knowledge/journal.md"}
UNCERTAIN_LETTERS = 6  # letters in intro/page.js whose date is a span, fixed by the synthetic example


@unittest.skipIf(shutil.which("node") is None, "Node.js is not installed")
class IntroScriptSyntaxTest(unittest.TestCase):
    """The page's classic scripts parse, the check the web house rules ask of a no-build page."""

    def test_scripts_parse(self):
        for script in sorted((ROOT / "intro").glob("*.js")):
            with self.subTest(script=script.name):
                result = subprocess.run(["node", "--check", str(script)], capture_output=True, text=True)
                self.assertEqual(result.returncode, 0, result.stderr)


class _QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


@unittest.skipIf(sync_playwright is None, "Playwright is not installed")
class IntroPageTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        handler = functools.partial(_QuietHandler, directory=str(ROOT))
        cls.server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
        threading.Thread(target=cls.server.serve_forever, daemon=True).start()
        cls.base = f"http://127.0.0.1:{cls.server.server_address[1]}/intro/"
        cls.pw = sync_playwright().start()
        cls.browser = cls.pw.chromium.launch()

    @classmethod
    def tearDownClass(cls):
        cls.browser.close()
        cls.pw.stop()
        cls.server.shutdown()

    def open(self, lang="en", width=1440, height=900):
        page = self.browser.new_page(viewport={"width": width, "height": height})
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        page.goto(f"{self.base}?lang={lang}")
        page.wait_for_selector(".step-pick")
        self.addCleanup(page.close)
        self.addCleanup(lambda: self.assertEqual(errors, [], "script errors on the page"))
        return page

    def pick(self, page, index):
        page.locator(".step-pick").nth(index).click()

    def files(self, page, state):
        return set(page.locator(f"#folder .file.is-{state} code").all_inner_texts())

    def test_first_step_creates_data_and_project(self):
        page = self.open()
        self.assertEqual(self.files(page, "new"), {"data/letters.csv", "knowledge/project.md"})
        self.assertEqual(page.locator("#proto svg").count(), 0, "a prototype exists before Build")

    def test_check_marks_every_uncertain_letter(self):
        page = self.open()
        self.pick(page, 4)
        self.assertEqual(page.locator("#proto .flag-ring").count(), UNCERTAIN_LETTERS)

    def test_write_back_changes_documents_and_not_the_code(self):
        page = self.open()
        self.pick(page, 5)
        self.assertEqual(self.files(page, "changed"), WRITE_BACK)
        self.assertNotIn("index.html", self.files(page, "changed"))

    def test_rebuild_changes_the_code_and_draws_spans(self):
        page = self.open()
        self.pick(page, 6)
        self.assertEqual(self.files(page, "changed"), {"index.html"})
        self.assertEqual(page.locator("#proto rect.mark.span").count(), UNCERTAIN_LETTERS)

    def test_focus_stays_on_the_stepper_at_its_end(self):
        page = self.open()
        page.get_by_role("button", name="Next", exact=True).focus()
        for _ in range(6):
            page.keyboard.press("Enter")
        self.assertEqual(page.evaluate("document.activeElement.getAttribute('aria-current')"), "step")

    def test_language_switch_reaches_german(self):
        page = self.open()
        page.locator(".pill", has_text="Deutsch").click()
        page.wait_for_url("**lang=de**")
        self.assertEqual(page.locator("html").get_attribute("lang"), "de")
        self.assertEqual(page.title(), "Promptotyping. Eine Einführung")

    def test_try_folder_names_the_step_in_view(self):
        page = self.open()
        page.locator(".steps > li").nth(2).get_by_role("button").focus()
        self.assertIn("Explore", page.locator("#try-folder .pane-title").inner_text())

    def test_example_fits_the_first_screen_and_holds_still(self):
        # design.md: at 1440 by 900 the example fits above the fold, and the panes do not jump
        # while the steps change.
        for lang in ("en", "de"):
            with self.subTest(lang=lang):
                page = self.open(lang=lang)
                page.evaluate("document.fonts.ready")
                bottoms = set()
                for index in range(7):
                    self.pick(page, index)
                    bottoms.add(round(page.evaluate("document.querySelector('.panes').getBoundingClientRect().bottom")))
                self.assertEqual(len(bottoms), 1, f"panes move between steps: {sorted(bottoms)}")
                self.assertLessEqual(bottoms.pop(), 900)

    def test_narrow_screen_keeps_navigation_and_page_inside(self):
        page = self.open(lang="de", width=320, height=700)
        self.assertFalse(page.evaluate("[...document.querySelectorAll('.site-nav a')].some(a => a.getBoundingClientRect().right > innerWidth)"))
        self.assertLessEqual(page.evaluate("document.documentElement.scrollWidth"), 320)

    def test_phone_header_keeps_to_two_rows(self):
        page = self.open(width=390, height=844)
        # Brand and language switch share the first row, the navigation takes the second.
        self.assertFalse(page.locator(".spec-link").is_visible())
        self.assertLess(page.locator("#site-head").bounding_box()["height"], 110)


if __name__ == "__main__":
    unittest.main()
