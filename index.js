var isNode=new Function("try {return this===global;}catch(e){return false;}");

// tests if global scope is binded to "global"
//if(isNode()) console.log("running under node.js");

module.exports = isNode;