const Tree = require('../tree/tree')
const intersectTree = require('./intersect')


let treeA = new Tree;
let treeB = new Tree;
let treeC = new Tree;


treeA.insert(5)
treeA.insert(15)
treeA.insert(25)
treeA.insert(35)
treeA.insert(45)
treeA.insert(55)
treeA.insert(65)

treeB.insert(5)
treeB.insert(1)
treeB.insert(25)
treeB.insert(3)
treeB.insert(45)
treeB.insert(5)
treeB.insert(65)

treeC.insert(9)


describe('Intersect Tests', () => {
  it('Produce an array with values that each tree shares', () => {
    expect(intersectTree(treeA, treeB)).toEqual([5, 25, 45, 65])
  })
})

describe('Intersect Tests', () => {
  it('Returns empty array if no matches', () => {
    expect(intersectTree(treeC, treeA)).toEqual([])
  })
})