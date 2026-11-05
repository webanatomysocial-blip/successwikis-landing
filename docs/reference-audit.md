# Reference and previous-build audit

## Previous implementation problems

1. **Typography:** Google-loaded Inter was used too broadly; the reference mixes Anton/condensed display typography, Geist body copy, Inter utility text and Martian Mono labels. Several headings inherited overly tight tracking and wrapped differently.
2. **Layout:** the complete home route lived in one page component; section heights exceeded the 1440 px reference by roughly 2,900 px and responsive layouts were inferred rather than measured.
3. **Images:** correct source files were present, but the group portrait crop emphasized the floor rather than the people at some widths. The contact ticket motion asset was absent.
4. **Overlays:** hero/footer overlays were generalized instead of separated into reference-specific stacked gradients.
5. **Spacing:** mobile vertical spacing and the desktop About/Group proportions were too large compared with the reference captures.
6. **Animation:** reveal elements remained transparent in non-scrolled full-page captures; timings were close but not route-scoped. Contact interactions were missing.
7. **Responsive:** contact/tablet/mobile routes did not exist. Mobile contact intentionally hides the form in the reference.
8. **Architecture:** navigation, footer, tokens and section behavior were not shared; one page and one very large CSS file held most of the site.

## Reference measurements

Captured widths: 1920, 1600, 1440, 1366, 1024, 768, 430, 390 and 375 px. Reference full-page heights ranged from 5,168–6,011 px for Home and 3,130–4,193 px for Contact.

Public Framer HTML, CSS variables, font declarations, images and the contact ticket WebM were inspected directly. The interactive browser host was unavailable, so DOM-level hover inspection was supplemented by computed published styles and automated Chrome captures.
