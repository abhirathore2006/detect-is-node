# Detect Is Node

You can use this module to detect if your code is running in the browser or on a Node.JS server.

# Install

```shell
npm install --save detect-is-node
```

# Usage:

```js
var isNode = require('detect-is-node');

if (isNode()) {
  console.log("Running under node Environment");
} else {
  console.log("Running in browser");
}
```
