import findLast from "array.prototype.findlast";
import findLastIndex from "array.prototype.findlastindex";

if(!Array.prototype.findLast) {
  Array.prototype.findLast = function(fn) {
    console.log(this);
    return findLast(this, fn);
  };
}

if(!Array.prototype.findLastIndex) {
  Array.prototype.findLastIndex = function(fn) {
    return findLastIndex(this, fn);
  };
}