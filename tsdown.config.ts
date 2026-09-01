import { defineConfig } from 'tsdown'

// One output, pinned to the path this package has always published at (`lib/`,
// CommonJS, `main` + `typings`). jest loads a watch plugin with `require()`, so a
// CommonJS build is the product, not a legacy state — replacing `tsc` with tsdown
// has to stay invisible to consumers.
export default defineConfig({
	entry: ['src/index.ts'],
	format: 'cjs',
	platform: 'node',
	outDir: 'lib',
	// Without this the output is .cjs / .d.cts, which moves published paths.
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
