/** @type {import('jest').Config} */
export default {
	testEnvironment: 'node',
	// @swc/jest rather than ts-jest: ts-jest's peer range is `typescript >=4.3 <7`,
	// and this repo is on TypeScript 7. Types are checked by `pnpm typecheck`, so the
	// transform only has to strip them.
	transform: {
		'^.+\\.tsx?$': ['@swc/jest', {}]
	},
	testMatch: ['<rootDir>/src/**/*.spec.ts'],
	collectCoverageFrom: ['src/**/*.ts', '!src/**/*.spec.ts'],
	coverageReporters: ['text', 'lcov'],
	// The level this package already meets. Pinned so a drop fails the build instead
	// of quietly showing up in a coverage report nobody reads.
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100
		}
	},
	// Dogfooding: the built plugin is loaded by the real jest that runs this repo's
	// own tests, so `pnpm watch` exercises the published artifact. `turbo run coverage`
	// depends on `build`, which is what guarantees lib/index.js exists first.
	watchPlugins: [
		[
			'<rootDir>/lib/index.js',
			{
				'suspend-on-start': true
			}
		]
	]
}
