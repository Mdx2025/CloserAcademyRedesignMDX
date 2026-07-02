# Changelog

## 2026-07-02

### Fixed — responsive QA pass (Playwright, 16 device/resolution combos)

Verified across desktop/laptop/tablet/mobile top-4 resolutions each. Desktop and
laptop now pass with 0 detected issues (8/8). Remaining tablet/mobile flags are
heuristic touch-target advisories and iOS `env(safe-area)` (which Playwright
cannot simulate).

- **Laptop 1537–1919px horizontal overflow (~100px):** the first compaction tier
  started at `≤1536`, so 1680-class laptops used the 1920-base fixed column widths
  and overflowed horizontally. Raised the first breakpoint to `≤1800`. Overflow now
  0 at 1680/1600/1500.
- **Tablet (`≤1024`) content clipping:** tablet kept the desktop fixed-height
  (`h-dvh` + internal scroll) model, which clipped the schedule panel (~300px cut)
  and left a 56px viewport overflow. Switched tablet to natural document flow
  (page scroll), matching mobile. Every section is now fully visible.
- **ApplicationCard "more" button unclickable:** the `z-10` button rendered behind
  the `z-10` content div (later in DOM). Bumped the button to `z-20`.
- **InterviewCard content clipped on short viewports:** cards lacked `shrink-0`, so
  flexbox compressed them below content height and `overflow-hidden` clipped them.
  Added `shrink-0`; the interviews container scrolls instead.
- **Mobile notch (safe-area):** added `env(safe-area-inset-*)` padding to
  `.main-content` so the header clears the Dynamic Island / notch.
