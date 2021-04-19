'use strict';

const BST = require('./tree.js');


describe('', () => {

  const newTree = new BST.BinarySearchTree();

  beforeAll( () => {
    newTree.add(9)
    newTree.add(10)
    newTree.add(7)
    newTree.add(3)
    newTree.add(21)
    newTree.add(5)
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

  it('Can return the max value in a tree', () => {
    expect(newTree.maxVal()).toEqual(21)
  })

  it('Can return an array of all values', () => {
    console.log(newTree.breadthFirst())
    expect(newTree.breadthFirst()).toEqual([9,7,10,3,21,5])
  })

});
