---
'jest-watch-suspend': patch
---

Declare a supported Node range: `^20.19.0 || ^22.13.0 || >=24`.

Every version in that range has unflagged `require(esm)`, so a CommonJS consumer's
`require()` of this now-ESM-only package resolves rather than throwing `ERR_REQUIRE_ESM`.
Node 18 (EOL April 2025) and Node 20.0–20.18 are excluded because `require()` hard-fails there.
