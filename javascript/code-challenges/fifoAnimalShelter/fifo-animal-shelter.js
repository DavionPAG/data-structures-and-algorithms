'use strict';

let cat = { 'name': 'cat' };
let dog = { 'name': 'dog' };


class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.storage = [];
    }

    enQ(item) {
        console.log('here')
        this.storage.push(item);

        if (this.storage.length == 1) {
            this.front = item;
            this.rear = item;

        } else {
            this.rear = item;
        }
    }

    deQ(pref) {

        if (pref) {
            
            let item = this.storage.indexOf({'name': 'pref'});
            console.log(item)
            let animal = this.storage[item].name
            console.log(animal)
            delete this.storage[item]
            return animal;
        }

        if (!pref) {
            let item = this.storage.shift();

            if (this.storage.length == 0) {
                this.front = null;
                this.rear = null;

            } else {
                this.front = this.storage[0];
                this.rear = this.storage[this.storage.length - 1];
            }

            return `No preference so you get a ${item.name}`;
        }
    }
}


let q = new Queue();

q.enQ(cat);
q.enQ(cat);
q.enQ(cat)
q.enQ(cat)

q.enQ(dog)
q.enQ(dog)
q.enQ(dog)
q.enQ(dog)

q.deQ()
q.deQ('dog')
q.deQ('cat')

q