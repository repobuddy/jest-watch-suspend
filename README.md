# jest-watch-suspend

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Mentioned in Awesome Jest](https://awesome.re/mentioned-badge.svg)](https://github.com/jest-community/awesome-jest)

[![GitHub Actions][github-action-image]][github-action-url]
[![Codecov][codecov-image]][codecov-url]

[![Visual Studio Code][vscode-image]][vscode-url]

Pausing/resuming [`jest`](https://jestjs.io/) watch mode.

Requires `jest@23+`.

## Usage

To use `jest-watch-suspend`,
add it to the `watchPlugins` section of the Jest configuration:

```js
{
  "jest": {
    "watchPlugins": [
      // default
      "jest-watch-suspend",
      // configure
      [
        "jest-watch-suspend", {
          // override key press
          "key": "s",
          // override prompt
          "prompt": "suspend watch mode",
          // starts in suspend mode
          "suspend-on-start": true
        }
      ]
    ]
  }
}
```

## Use Cases

Suspend on start:

- (suspended) ➣ `[p] + <filter>` | `[t] + <filter>` ➣ `[s]` (resume)

Setup both path and name filter before running tests:

- `[s]` (suspend) ➣ `[p] + <filter>` & `[t] + <filter>` ➣ `[s]` (resume)

Change multiple files before running tests:

- `[s]` (suspend) ➣ multiple changes and file saves ➣ `[s]` (resume)

Run code coverage after running some `test.only()` tests:

- `[s]` (suspend) ➣ change `test.only()` back to `test()` & `[e]` (with `jest-watch-toggle-config`) ➣ `[s]` (resume)

[codecov-image]: https://codecov.io/gh/repobuddy/jest-watch-suspend/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/repobuddy/jest-watch-suspend
[downloads-image]: https://img.shields.io/npm/dm/jest-watch-suspend.svg?style=flat
[downloads-url]: https://npmjs.org/package/jest-watch-suspend
[github-action-image]: https://github.com/repobuddy/jest-watch-suspend/workflows/release/badge.svg
[github-action-url]: https://github.com/repobuddy/jest-watch-suspend/actions
[npm-image]: https://img.shields.io/npm/v/jest-watch-suspend.svg?style=flat
[npm-url]: https://npmjs.org/package/jest-watch-suspend
[vscode-image]: https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]: https://code.visualstudio.com/
