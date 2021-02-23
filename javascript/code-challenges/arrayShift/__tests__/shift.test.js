'use strict';

const shift = require('../array-shift.js');

describe('Array shift', () => {

  it('It should insert input to middle index', () => {
    let numArr = [2,4,8,10];
    let input = 5;
    let expected = [2,4,5,8,10];
    shift(numArr, input);
    expect(numArr).toEqual(expected);
  });

});
