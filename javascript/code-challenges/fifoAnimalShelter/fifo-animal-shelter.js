'use strict';

let cat = { 'name': 'cat' };
let dog = { 'name': 'dog' };


class Queue {
    constructor() {
        this.storage = [];
    }

    enQ(animal) {
        this.storage.push(animal);
    }

    deQ(pref) {
        if (pref) {

            let item = this.storage.indexOf(pref);
            let animal = this.storage.splice(item, 1)[0].name   
            return animal;
        }

        if (!pref) {
            let rdmAni = this.storage.shift();
            // console.log(`No preference so you get a ${rdm.name}`);
            return (`No preference wins you a ${rdmAni.name}`);
        }
    }
}

let q = new Queue;

q.enQ(cat);
q.enQ(cat);
q.enQ(dog);
q.enQ(cat);

console.log(q);

q.deQ(dog);

console.log(q);


module.exports = { Queue }

