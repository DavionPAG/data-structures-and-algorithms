'use strict';

function insertShiftArray(arr, val) {
  let mid = Math.ceil((arr.length - 1) / 2);
  arr.splice(mid, 0, val);
  return arr;
}

module.exports = insertShiftArray;
