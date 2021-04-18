'use strict';
const Node = require('./node.js');

class BinaryTree {

  constructor() {
    this.root = null;
  }

  preOrder() {
    let nodes = [];

    let traverse = (node) => {
      nodes.push(node.val);
      if (node.left) { traverse(node.left); }
      if (node.right) { traverse(node.right); }
    };

    traverse(this.root);

    return nodes;
  }

  inOrder() {

    let nodes = [];

    let traverse = (node) => {
      if (node.left) { traverse(node.left); }
      nodes.push(node.val);
      if (node.right) { traverse(node.right); }
    };

    // Start the process
    traverse(this.root);

    return nodes;

  }

  postOrder() {

    let nodes = [];
    let traverse = (node) => {
      if (node.left) { traverse(node.left); }
      if (node.right) { traverse(node.right); }
      nodes.push(node.val);
    };

    traverse(this.root);

    return nodes;
  }

}

class BinarySearchTree extends BinaryTree {
  add(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode
      return 'added';
    }

    const trek = (node) => {
      if (val < node.val) {
        if (!node.left) {
          node.left = newNode;
          return 'added';
        }
        trek(node.left);
      }

      if (val > node.val) {
        if (!node.right) {
          node.right = newNode;
          return 'added';
        }
        trek(node.right);
      }
    };
    trek(this.root);
  }

  contains(val) {
    let nodeVal = this.root
    while (nodeVal) {
      if (nodeVal.val === val) return true;

      if (val < nodeVal.val) {
        nodeVal = nodeVal.left;
      }

      if (val > nodeVal.val) {
        nodeVal = nodeVal.right;
      }

      else {
        return false;
      }
    }
  }
}

module.exports = { 
  BinaryTree: BinaryTree,
  BinarySearchTree: BinarySearchTree
}

