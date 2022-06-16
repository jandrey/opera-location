[action-image]: https://github.com/jandreyoliveira/opera-location/workflows/CI/badge.svg
[action-url]: https://github.com/jandreyoliveira/opera-location/actions?query=workflow%3ACI
[npm-image]: https://img.shields.io/npm/v/opera-location.svg
[npm-url]: https://npmjs.org/package/opera-location

# opera-location [![workflow][action-image]][action-url] [![npm][npm-image]][npm-url]

> Approximates the current location of the opera browser across platforms. Will fallback to Chromium if location is not found.

# Usage

**Via Node.js:**

```js
// Returns the path to opera as a string.
const operaLocation = require('opera-location')

console.log(operaLocation())
// /Applications/opera.app/Contents/MacOS/opera
```

**Via CLI:**

```bash
> opera-location
# /Applications/opera.app/Contents/MacOS/opera
```

Open opera (remember to use quotes as opera's path usually has spaces in it):

```bash
> "`opera-location`"
```

## License

MIT (c) Jandrey Oliveira.
