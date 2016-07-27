you can use this module to detect if your code is running on node server.

E.g.  var isNode = require('detect-is-node');

console.log(isNode());

//output true if running on Node 
//output false if running on browser
