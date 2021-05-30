'use strict';

const LinkedList = require('./linked-list.js');

// to avoid collisions:
// 1. Create a NEW hash table with doule the buckets
// 2. For each thing in the old hash table, .set() into the new
// 2a. Add the new thing
// 3. Delete old hash table

// NOTE:
// Even though under the hood, it's an array
// Even though my language's external implementation of Map allows it ...
// YOU MAY NOT (NOT!) iterate a hash map as a user

class HashMap {

  constructor(size) {
    this.size = size;
    this.map = new Array(size).fill();
  }

  // Return a number that equates to a bucket index
  hash(key) {
    let sumOfKeyLetters = key.split('').reduce((acc, val) => {
      let cc = val.charCodeAt(0);
      let num = acc + cc;
      return num;
    }, 0);

    let hash = sumOfKeyLetters * 599 % this.size;

    return hash;
  }

  // Add a key/value pair to the HT
  set(key, value) {
    let hash = this.hash(key); // should return a number that is an index of this.map
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    let entry = { [key]: value };

    this.map[hash].append(entry);

  }

  // Return the value for the key from the HT
  get(key) {
    // 1: hash the key
    let hashedKey = this.hash(key);
    // 2: Get the value of this.map[hash]
    let bucket = this.map[hashedKey];
    if (!bucket) return 'Invalid key';

    // 3: Traverse the linked list and find the actual one (because ... collisions)
    let current = bucket.head;
    while (current) {
      if (Object.keys(current.value)[0] === key) {
        return current.value;
      }
      // 4: Return what we find
      current = current.next;
    }
  }

  // return a bool if it's in the HT
  has(key) {
    // 1: hash the key
    let hashedKey = this.hash(key);
    // 2: Get the value of this.map[hash]
    let bucket = this.map[hashedKey];
    if (!bucket) return false;

    // 3: Traverse the linked list and find the actual one (because ... collisions)
    let current = bucket.head;
    while (current) {
      if (Object.keys(current.value)[0] === key) {
        return true;
      }
      // 4: Return what we find
      current = current.next;
    }
  }

}

module.exports = HashMap;

// classically -- 1024
let people = new HashMap(16);
people.set('Anne', 'Student');
people.set('Taylor', 'Student');
people.set('Michael', 'Student');
people.set('Mark the avenger', 'Student');
people.set('TJ', 'Student');
people.set('Jenner', 'Student');
people.set('Nassir', 'Student');
people.set('Dawit', 'Student');
people.set('Rosie', 'Dog');



//Violation of all things holy
// people.map.forEach((data, i) => {
//   console.log(i, data && data.print());
// });
