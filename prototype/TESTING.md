# Testing Checklist - Interactive Paper MVP

## Manual Testing Checklist

### ✅ Core Functionality

- [ ] **Page loads without errors**
  - Open `index.html` in browser
  - Check browser console (F12) for errors
  - Verify no 404s for data.json, styles.css, app.js

- [ ] **Paper content renders correctly**
  - All headings (H1, H2, H3) visible
  - Paragraphs formatted correctly
  - Links are blue and clickable

- [ ] **6 Use Case Cards appear**
  - Stefan Zweig Digital (Experimental)
  - REALonline (Optimal)
  - Aldersbach (Optimal)
  - CVMA (Optimal)
  - Kriminalmuseum (Minimal)
  - Lucina Edition (Complex)

- [ ] **Category badges show correct colors**
  - Experimental: Orange (#f97316)
  - Minimal: Yellow (#eab308)
  - Optimal: Green (#22c55e)
  - Complex: Purple (#a855f7)

### ✅ Use Case Cards

- [ ] **Card hover effects work**
  - Left border grows from 4px to 8px
  - Card translates 4px to the right
  - Subtle shadow appears

- [ ] **"Explore →" button works**
  - Click opens slide-in panel from right
  - Main content dims (overlay)
  - Panel shows correct use case data

### ✅ Slide-In Panels

- [ ] **Panel opens smoothly**
  - Slides in from right (0.3s animation)
  - Overlay fades in simultaneously
  - Body scroll is locked (overflow: hidden)

- [ ] **Panel content is complete**
  - Title and metadata correct
  - Context text visible
  - Documents list (or "Keine Dokumente" for SZD)
  - All links work (Demo, Repository, Video/Blog/Slides)
  - Process notes are listed
  - LLMs and tags displayed

- [ ] **Panel closes correctly**
  - X button closes panel
  - Click on overlay closes panel
  - ESC key closes panel
  - Body scroll is restored

- [ ] **Multiple demos work (Lucina, KM)**
  - Lucina: 4 demo buttons (Demo 1-4)
  - KM: 2 demo buttons (Demo 1-2)
  - All buttons link to correct URLs

### ✅ Scroll Progress

- [ ] **Progress bar updates on scroll**
  - Bar is 0% at top
  - Bar grows as you scroll down
  - Bar is 100% at bottom

### ✅ Responsive Design

**Desktop (>1024px)**:
- [ ] Content max-width 700px, centered
- [ ] Use Case Cards horizontal layout
- [ ] Panel 500px wide

**Tablet (768px - 1023px)**:
- [ ] Content has proper padding
- [ ] Cards still horizontal

**Mobile (<768px)**:
- [ ] Header progress bar smaller (100px)
- [ ] Use Case Cards stack vertically
- [ ] "Explore →" button full width
- [ ] Panel full width (100vw)

### ✅ Browser Compatibility

Test in:
- [ ] **Chrome** (latest)
- [ ] **Firefox** (latest)
- [ ] **Safari** (latest)
- [ ] **Edge** (latest)

### ✅ Accessibility

- [ ] **Keyboard navigation**
  - Tab reaches all interactive elements
  - Enter/Space activates buttons
  - ESC closes panel

- [ ] **Semantic HTML**
  - `<header>`, `<main>`, `<section>` tags present
  - Headings in correct order (H1 > H2 > H3)

- [ ] **Color contrast**
  - Text readable (WCAG AA compliant)
  - Links distinguishable from text

### ✅ Performance

- [ ] **Lighthouse Score**
  - Performance: > 85
  - Accessibility: > 90
  - Best Practices: > 90
  - SEO: > 90

- [ ] **Load Time**
  - Initial page load < 3 seconds (4G)
  - No layout shift (CLS)

- [ ] **Bundle Size**
  - CSS < 30 KB (minified)
  - JS < 20 KB (minified)
  - data.json < 30 KB

### ✅ Edge Cases

- [ ] **SZD (0 documents)**
  - Card shows "0 Docs"
  - Panel shows "Keine formalen Dokumente"
  - No document list displayed

- [ ] **Lucina (4 demos)**
  - All 4 demo buttons work
  - Buttons labeled "Demo 1", "Demo 2", etc.

- [ ] **KM (2 demos)**
  - Both demo buttons work

- [ ] **External links open in new tab**
  - All links have `target="_blank"`
  - All links have `rel="noopener"`

### ✅ Console Validation

- [ ] No JavaScript errors
- [ ] No CSS errors
- [ ] Console logs show:
  - "✅ Loaded 6 use cases"
  - "✨ Interactive Paper - Promptotyping"

---

## Known Issues / Limitations

### Expected Behaviors (Not Bugs)

1. **Paper content is inline Markdown**
   - Not loaded from `paper-draft.md` (MVP simplification)
   - Full paper parsing planned for v1.1

2. **No comparison table**
   - Planned for v1.1
   - Current MVP focuses on storytelling flow

3. **No template downloads**
   - Planned for v1.1

4. **Mobile panel full-width**
   - Intentional design decision for mobile UX

---

## Performance Benchmarks

### Target Metrics (MVP)

| Metric | Target | Actual |
|--------|--------|--------|
| First Contentful Paint | < 1.5s | ___ |
| Time to Interactive | < 3s | ___ |
| Total Blocking Time | < 300ms | ___ |
| Lighthouse Performance | > 85 | ___ |
| Total JS Size (gzipped) | < 30 KB | ~18 KB |
| Total CSS Size (gzipped) | < 30 KB | ~8 KB |

### Tools

- **Lighthouse**: Built into Chrome DevTools
- **WebPageTest**: https://www.webpagetest.org/
- **Bundle Size**: `ls -lh prototype/` (Unix) or `dir` (Windows)

---

## Testing Commands

### Local Server (Python)

```bash
cd prototype/
python -m http.server 8000
# Open http://localhost:8000
```

### Local Server (Node.js)

```bash
cd prototype/
npx serve
# Open http://localhost:3000
```

### Validate JSON

```bash
cd prototype/
cat data.json | python -m json.tool
```

---

## Regression Testing

After any changes, re-test:

1. ✅ All 6 use case cards appear
2. ✅ All panels open and close
3. ✅ All external links work
4. ✅ Scroll progress updates
5. ✅ Mobile layout works

---

## Browser DevTools Checks

### Console Tab

- No red errors
- Console logs present:
  - "✅ Loaded 6 use cases"
  - "✨ Interactive Paper - Promptotyping"

### Network Tab

- All resources load (200 status)
- No 404 errors
- Total payload < 100 KB

### Elements Tab

- All `.use-case-card` elements present (6x)
- `.slide-panel` elements created dynamically

---

## Sign-Off

**Tester:** _______________
**Date:** _______________
**Browser:** _______________
**Result:** ✅ PASS / ❌ FAIL

**Notes:**
_______________________________________________
_______________________________________________
_______________________________________________
