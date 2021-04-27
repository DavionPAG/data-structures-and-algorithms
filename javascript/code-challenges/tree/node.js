'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.children = [];
  }
}

module.exports = Node;
