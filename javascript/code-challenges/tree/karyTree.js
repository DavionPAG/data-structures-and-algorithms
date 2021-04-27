'use strict';

class Node {
    constructor(val) {
        this.val = val,
            this.children = [];
    }
}

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

// console.log(JSON.stringify(karyTree, null, 4))

let karyTreeFizzBuzz = (kTree) => {

    let oldTree = JSON.stringify(kTree)
    let newTree = JSON.parse(oldTree)
    let trek = (node) => {

        if (node.children) {
            node.children.forEach(child => {
                if (child.val % 15 === 0) { child.val = `FizzBuzz`; }
                else if (child.val % 3 === 0) { child.val = `Fizz`; }
                else if (child.val % 5 === 0) { child.val = `Buzz`; }
                else { child.val = child.val.toString() }
            });
        }
        if (node.children) { node.children.forEach(child => { trek(child) }); }
    };
    trek(newTree);
    // console.log(JSON.stringify(newTree, null, 4));

    return newTree
};


karyTreeFizzBuzz(karyTree);

module.exports = karyTreeFizzBuzz;

