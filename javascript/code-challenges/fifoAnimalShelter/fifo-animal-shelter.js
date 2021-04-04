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
            return (`No preference wins you a ${rdmAni.name}`);
        }
    }
}


module.exports = { Queue };

