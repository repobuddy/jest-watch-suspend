# jest-watch-suspend

## 2.0.0

### Major Changes

- c730d86: Ship ESM only.
  
  The package is now `"type": "module"` and `lib/` holds a single ESM build. The
  plugin class moved from `export =` to a default export, which is what jest's
  `requireOrImportModule` reads off an imported namespace.
  
  **Migration**
  
  - Requires **jest >= 28**. Jest has loaded ESM watch plugins since 27, but it
    resolves the plugin path with the default `require`/`node`/`default` conditions
    and only honours `exports` from 28 — so the exports map deliberately points its
    `default` condition at the ESM entry, and jest 27 and older are no longer supported.
  - `require('jest-watch-suspend')` no longer works. Configure the plugin by name in
    `watchPlugins` as before; jest imports it for you.

### Patch Changes

- 090e7bd: Declare a supported Node range: `^20.19.0 || ^22.13.0 || >=24`.
  
  Every version in that range has unflagged `require(esm)`, so a CommonJS consumer's
  `require()` of this now-ESM-only package resolves rather than throwing `ERR_REQUIRE_ESM`.
  Node 18 (EOL April 2025) and Node 20.0–20.18 are excluded because `require()` hard-fails there.

## 1.1.3

### Patch Changes

- 6732d60: Rebuild with tsdown and refresh the runtime dependencies: `chalk` `^3` → `^4` and
  `unpartial` `^0.6.3` → `^1.0.6`. The published paths (`lib/index.js`, `lib/index.d.ts`,
  `lib/WatchSuspendPlugin.*`) and the public API are unchanged; only the emitted output
  and the dependency ranges consumers install move.

All notable changes to this project are documented here.

Releases up to and including 1.1.2 predate this file and are listed at
<https://github.com/unional/jest-watch-suspend/releases>.
