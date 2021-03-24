'use strict';

const nsq = require('../stacks-and-queues.js');
const Node = nsq.node;
const Stack = nsq.stack;
const Queue = nsq.q;

describe('Queues Test Suit', () => {
    it('Add a node to the Queue', () => {
        let q = new Queue();
        q.enQ(10)
        expect(q.front.val).toBe(10)
    });

    it('Adds multiple nodes to the queue', () => {
        let q = new Queue();
        q.enQ(10)
        q.enQ(20)
        q.enQ(30)
        expect(q.tail.val).toBe(30)
    });

    it('pops a node from the queue', () => {
        let q = new Queue();
        q.enQ(10)       
        expect(q.deQ()).toBe(10)
    });

    it('Returns Empty if queue is empty', () => {
        let q = new Queue();
        expect(q.peek()).toBe('Empty')
    });
});

describe('Stacks Test Suit', () => {
    it('Add a node to the stack', () => {
        let stack = new Stack();
        stack.push(10)
        expect(stack.top.val).toBe(10)
    });

    it('Adds multiple nodes to the stack', () => {
        let stack = new Stack();
        stack.push(10)
        stack.push(20)
        stack.push(30)
        expect(stack.top.val).toBe(30)
    });

    it('pops a node from the stack', () => {
        let stack = new Stack();
        stack.push(10)
        stack.pop(10)       
        expect(stack.top).toBeNull()
    });

    it('Returns Empty if stack is empty', () => {
        let stack = new Stack();
        expect(stack.peek()).toBe('Empty')
    });
});