//var isNode=new Function("try {return this===global;}catch(e){return false;}");
var isNode =function(){
    var windowTest;
     try {
        //if window is declared thorugh JS DOM then window will be defined but will not be equal to this
        windowTest  =  this === window;
     }catch(e) {
       return true;
     }
      try {
        return this===global && !windowTest;
      }
      catch(e) {
        return false;
      }
}
module.exports = isNode;
