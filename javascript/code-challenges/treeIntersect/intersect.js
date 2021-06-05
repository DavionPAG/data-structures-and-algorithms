
let treeIntersect = function (node, treeB) {

  let arr = []

  let trek = (node) => {

    let intersect = treeB.contains(node.val)
    if (intersect === true) {
      arr.push(node.val)
    }

    if (node.left) { trek(node.left); }

    if (node.right) { trek(node.right); }

  };
  trek(node.root);

  return arr


}

module.exports = treeIntersect;
