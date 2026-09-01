# jest-watch-suspend

## 1.1.3

### Patch Changes

- 6732d60: Rebuild with tsdown and refresh the runtime dependencies: `chalk` `^3` → `^4` and
  `unpartial` `^0.6.3` → `^1.0.6`. The published paths (`lib/index.js`, `lib/index.d.ts`,
  `lib/WatchSuspendPlugin.*`) and the public API are unchanged; only the emitted output
  and the dependency ranges consumers install move.

All notable changes to this project are documented here.

Releases up to and including 1.1.2 predate this file and are listed at
<https://github.com/unional/jest-watch-suspend/releases>.
