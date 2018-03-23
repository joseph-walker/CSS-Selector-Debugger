# CSS Selector Extension

[![https://img.shields.io/badge/badge%20status-dank-brightgreen.svg](https://img.shields.io/badge/badge%20status-dank-brightgreen.svg)](https://img.shields.io/badge/badge%20status-dank-brightgreen.svg)

A Chrome extension to help target specific DOM elements with CSS selectors.

## Building
```
npm install
webpack
```

## Development
```
webpack --watch
```

## Installing
To install the Chrome extension, navigate to `chrome://extensions` and make sure Developer mode is turned on.
Click on `Load Unpacked Extension` and navigate to this project's `dist` directory.

Whenever Webpack builds the project, Chrome should automatically reload the extension to reflect the latest changes.
If for some reason it doesn't do that, navigate to `chrome://extensions`, locate this extension in the list, and hit the refresh button.

## Attributions
Highlighter icon by [http://www.freepik.com](Freepik) from [https://www.flaticon.com/](Flaticon) is licensed under [http://creativecommons.org/licenses/by/3.0/](CC 3.0 BY)