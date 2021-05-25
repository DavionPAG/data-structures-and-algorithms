'use strict';

let merge = (left, right) => {
  let arr = [];


  while (left.length && right.length) {

    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
};

let mergeSort = arr => {
  const half = arr.length / 2;

  // Base case
  if (arr.length < 2) {
    return arr;
  }

  const left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(arr));
};

let arr = [8,4,23,42,16,15];
let newArr = mergeSort(arr);
console.log(newArr);
module.exports = {mergeSort, merge};
