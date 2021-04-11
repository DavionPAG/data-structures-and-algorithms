'use strict';

const Tree = require('./binary-tree.js');
const Node = require('./node.js');

describe('Tree', () => {

  const tree = new Tree();

  beforeAll( () => {
    const nine = new Node(9);
    const four = new Node(4);
    const three = new Node(3);
    const six = new Node(6);
    const twelve = new Node(12);
    const eleven = new Node(11);
    const twentytwo = new Node(22);

    tree.root = nine;
    nine.left = four;
    nine.right = twelve;
    four.left = three;
    four.right = six;
    twelve.left = eleven;
    twelve.right = twentytwo;

  });

  xit('  search tree can add a root', () => {
 
  });

  it('Can successfully instantiate a tree with a single root node', () => {
  });

  it('Can successfully add a left child and right child to a single root node', () => {
  });

  it('Can successfully return a collection from a preorder traversal', () => {

  });

  it('Can successfully return a collection from an inorder traversal', () => {
  });

  it('Can successfully return a collection from a postorder traversal', () => {
  });

 

});
