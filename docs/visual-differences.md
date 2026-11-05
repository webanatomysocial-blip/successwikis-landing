# Remaining visual differences

- Framer's editor badge is intentionally not recreated.
- The contact reference form is visually absent at mobile breakpoints; this implementation preserves that responsive behavior.
- The contact form is validation-ready but has no external email/API backend. A local success state is shown after valid submission.
- Minor glyph rasterization can differ because the reference's exact generated font binaries are served through Framer while this build uses the corresponding licensed public font families.
- Some initial full-page reference screenshots capture scroll-reveal elements before they animate; comparison captures are retained both before and after scripted scrolling.
