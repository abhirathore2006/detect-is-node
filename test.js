var isNode = require('./index.js');
if (isNode()) {
  console.log("Running under node Environment");
} else {
  console.log("Running in browser");
}

