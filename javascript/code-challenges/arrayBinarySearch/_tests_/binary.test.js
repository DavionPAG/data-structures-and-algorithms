'use strict';

const binary = require('../array-binary-search.js');

describe('Binary Search', () => {

    it('Should find the index of the input interger if exists', () => {
        let numArr = [2, 4, 6, 8, 10, 11, 12, 14, 16, 18, 20];
        let input = 5;
        let expected = -1;
        expect(binary(numArr, input)).toEqual(expected);
    });
    it('Should find the index of the input interger if exists', () => {
        let numArr = [2, 4, 6, 8, 10, 11, 12, 14, 16, 18, 20];
        let input = 11;
        let expected = 5;
        expect(binary(numArr, input)).toEqual(expected);
    });
    it('Should find the index of the input interger if exists', () => {
        let numArr = [2, 4, 6, 8, 10, 11, 12, 14, 16, 18, 20];
        let input = 16;
        let expected = 8;
        expect(binary(numArr, input)).toEqual(expected);
    });
    it('Should find the index of the input interger if exists', () => {
        let numArr = [2, 4, 6, 8, 10, 11, 12, 14, 16, 18, 20];
        let input = 6;
        let expected = 2;
        expect(binary(numArr, input)).toEqual(expected);
    });
});