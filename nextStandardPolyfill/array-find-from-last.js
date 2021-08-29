import findLast from "array.prototype.findlast";
import findLastIndex from "array.prototype.findlastindex";

Array.prototype.findLast = function(fn) {
  console.log(this);
  return findLast(this, fn);
};
Array.prototype.findLastIndex = function(fn) {
  return findLastIndex(this, fn);
};