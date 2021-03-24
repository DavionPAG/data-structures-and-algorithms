'use strict';

class Node {
    constructor(val, next) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(val) {
        let node = new Node(val);

        if (!this.top) {
            this.top = node;
        }
        else if (this.top) {
            let temp = this.top;
            this.top = node;
            node.next = temp;
        }
    }

    pop() {
        if (!this.top) return "Empty";
        let temp = this.top.next;
        this.top.next = null
        this.top = temp;
        return temp
    }

    peek() {
        if (!this.top) return "Empty";
        return this.top.val;
    }

    isEmpty() {
        return !this.top ? true : false;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.tail = null;
    }

    enQ(val) {
        let node = new Node(val);

        if (!this.front) {
            this.front = node;
            this.tail = node;
        }

        if (this.front) {
            this.tail.next = node;
            this.tail = node;
        }

    }

    deQ() {
        if (!this.front) {
            this.tail = null
            return "Empty";
        }
        let removed = this.front.val;
        this.front = this.front.next;
        return removed
    }

    peek() {
        if (!this.front) return "Empty";
        return this.front.val;
    }

    isEmpty() {
        return !this.front ? true : false;
    }
}

exports.node = Node;
exports.stack = Stack;
exports.q = Queue;