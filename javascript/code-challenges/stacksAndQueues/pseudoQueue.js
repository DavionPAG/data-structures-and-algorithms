'use strict';

const Stack = require('./stacks-and-queues.js');

class PsuedoQueue {
  constructor() {
    this.rearStack = new Stack();
    this.frontStack = new Stack();
  }
  enqueue(value) {
    while (this.frontStack.storage.length > 0) {
      this.rearStack.push(this.frontStack.pop());
    }
    this.rearStack.push(value);
  }
  dequeue() {
    while (this.rearStack.storage.length > 0) {
      this.frontStack.push(this.rearStack.pop());
    }
    this.frontStack.pop();
  }
}
module.exports = PsuedoQueue;