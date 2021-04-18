'use strict';

const BST = require('./tree.js');


describe('', () => {

  const newTree = new BST.BinarySearchTree();

  beforeAll( () => {
    newTree.add(9)
    newTree.add(10)
    newTree.add(7)
    newTree.add(9)
    newTree.add(10)
    newTree.add(7)
  });

  it('search  can add a root', () => {
    expect(newTree.root).toBeTruthy()
  });

  it('Can successfully instantiate a  with a single root node', () => {
    expect(newTree.root).toBeTruthy()
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    expect(newTree.root.left.val).toEqual(expect.any(Number))
    expect(newTree.root.right.val).toEqual(expect.any(Number))
  });

});
