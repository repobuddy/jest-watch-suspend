import { defineConfig } from 'tsdown'

// One ESM output, pinned to the path this package has always published at (`lib/`,
// `main` + `typings`). jest loads a watch plugin through `requireOrImportModule`
// (jest-core), which falls back to `await import()` on `ERR_REQUIRE_ESM` and reads
// the namespace's `.default` — so ESM is the product and `src/index.ts` default
// exports the class.
export default defineConfig({
	entry: ['src/index.ts'],
	format: 'esm',
	platform: 'node',
	outDir: 'lib',
	// Without this the output is .mjs / .d.mts, which moves published paths.
	outExtensions: () => ({ js: '.js', dts: '.d.ts' }),
	// `sourcemap: false` for the declarations: tsdown emits no .d.ts.map, so leaving
	// it on writes a sourceMappingURL comment pointing at a file that never ships.
	dts: { sourcemap: false },
	sourcemap: true,
	// Mirror the source tree rather than bundling, so `lib/WatchSuspendPlugin.js`
	// keeps existing alongside `lib/index.js` exactly as tsc emitted it.
	unbundle: true,
	target: 'es2022'
})
