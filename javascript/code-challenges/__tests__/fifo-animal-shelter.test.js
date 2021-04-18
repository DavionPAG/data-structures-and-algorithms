'use strict';

const { Queue } = require('../fifo-animal-shelter.js');

let cat = { 'name': 'cat' };
let dog = { 'name': 'dog' };

const q = new Queue;

q.enQ(cat);
q.enQ(cat);
q.enQ(dog);
q.enQ(cat);

let animal = 'cat' || 'dog';

describe('Animal Shelter Queue Tests', () => {
    it('Should return the Preferred animal', () => {
        expect(q.deQ(dog)).toEqual('dog')
    })
    it('Should return A random animal if no Pref', () => {
        expect(q.deQ()).toEqual(`No preference wins you a ${animal}`)
    })
})