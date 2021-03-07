'use strict';

const Node = require('../node.js')

describe('Node Class', () => {
    it('Creates a new node', () => {
        let val = 'node 1';
        let node = new Node(val);

        expect(node.val).toEqual(val)
        expect(node.next).toBeNull()
    })
});
