'use strict';

let {merge} = require('./merge');
let {mergeSort} = require('./merge');

describe('MERGE SORT TEST', () => {
  it('Should sort any given array', () => {
    let arr = [8,4,23,42,16,15];
    let newArr = mergeSort(arr);
    expect(newArr).toEqual([4,8,15,16,23,42]);
  });
});
