'use strict';

const karyTreeFizzBuzz = require('./karyTree.js');
const Node = require('./node');

let karyTree = new Node(1);

karyTree.children[0] = new Node(2);
karyTree.children[1] = new Node(3);
karyTree.children[2] = new Node(4);
karyTree.children[0].children[0] = new Node(5);
karyTree.children[0].children[1] = new Node(6);
karyTree.children[0].children[2] = new Node(7);
karyTree.children[1].children[0] = new Node(10);
karyTree.children[1].children[1] = new Node(12);
karyTree.children[1].children[2] = new Node(15);


describe('K-ary Tree FizzBuzz', () => {

	it('Can Apply FizzBuzz to values of a Tree', () => {
		let newTree = karyTreeFizzBuzz(karyTree);
		expect(newTree.children[1].val).toEqual('Fizz');
		expect(newTree.children[0].children[0].val).toEqual('Buzz');
		expect(newTree.children[1].children[0].val).toEqual('Buzz');
		expect(newTree.children[1].children[1].val).toEqual('Fizz');
		expect(newTree.children[1].children[2].val).toEqual('FizzBuzz');
	});
});
