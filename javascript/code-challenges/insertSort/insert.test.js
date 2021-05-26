'use strict';

let insertionSort = require('./insert');


describe('INSERTION SORT TEST', () => {
  it('Should sort any given array', () => {
    let arr = [8,4,23,42,16,15];
    let newArr = insertionSort(arr);
    expect(newArr).toEqual([4,8,15,16,23,42]);
  });
});
