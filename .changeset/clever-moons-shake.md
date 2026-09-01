---
'jest-watch-suspend': patch
---

Rebuild with tsdown and refresh the runtime dependencies: `chalk` `^3` → `^4` and
`unpartial` `^0.6.3` → `^1.0.6`. The published paths (`lib/index.js`, `lib/index.d.ts`,
`lib/WatchSuspendPlugin.*`) and the public API are unchanged; only the emitted output
and the dependency ranges consumers install move.
