'use strict';

let {quik} = require('./quik');
// let {swap} = require('./quik');
// let {partition} = require('./quik');



describe('QUICK SORT TEST', () => {
  it('Should sort any given array', () => {
    let arr = [8,4,23,42,16,15];
    let newArr = quik(arr, 0, arr.length -1);
    expect(newArr).toEqual([4,8,15,16,23,42]);
  });
});
