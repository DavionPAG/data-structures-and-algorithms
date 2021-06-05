'use strict';
const Node = require('./node.js');

class BinaryTree {

  constructor() {
    this.root = null;
  }

  insert(val) {

    const node = this.root;
    if ( node === null ) {
      this.root = new Node(val);
      return;
    }

    let _insert = (node) => {

      // Left is less  (< val)  ()< val  ()< val  ()< val
      if ( val < node.val ) {
        // If no left node, create a new node for it, with the current val
        if ( node.left === null ) {
          node.left = new Node(val);
          return;
        }
        // Otherwise,
        else if ( node.left !== null ) {
          return _insert(node.left);
        }
      }
      // Right is might (> val)
      else if ( val >= node.val ) {
        // If no right node, create a new node for it, with the current val
        if ( node.right === null ) {
          node.right = new Node(val);
          return;
        }
        // Otherwise,
        else if ( node.right !== null ) {
          return _insert(node.right);
        }
      }
      else {
        return null;
      }
    };

    _insert(node);

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

  maxVal() {
    let max = 0;
    let trek = (node) => {
      max = node.val > max ? node.val : max;
      if (node.left) { trek(node.left); }
      if (node.right) { trek(node.right); }
    };

    trek(this.root);

    return max;
  }

  breadthFirst() {
    let nodes = [];
    let queue = [];

    queue.push(this.root); 

    while(queue.length) {
    
      let currentNode = queue.shift(); 

      nodes.push(currentNode.val);

      if(currentNode.left) { queue.push(currentNode.left); }
      if(currentNode.right) { queue.push(currentNode.right); }
    }
    return nodes;
  }

}

class BST extends BinaryTree {
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
    let nodeVal = this.root;
    while (nodeVal) {
      if (nodeVal.val === val) return true;

      if (val < nodeVal.val && nodeVal.left) {
        nodeVal = nodeVal.left;
      }

      if (val > nodeVal.val && nodeVal.right) {
        nodeVal = nodeVal.right;
      }

      else {
        return false;
      }
    }
  }
}

module.exports = BST;

