you can use this module to detect if your code is running on node server.

E.g.  var isNode = require('detect-is-node');

install

```shell
npm install --save detect-is-node
```

###Usage:

```js
var isNode = require('detect-is-node');

if (isNode) {
  console.log("Running under node Environment");
} else {
  console.log("Running in browser");
}
