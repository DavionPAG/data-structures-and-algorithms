'use strict';

let parens = '(){}[[]]';
let stack = []

function isBalanced(str) {
    let arr = str.split('')
    arr.forEach(val => {
        if (val === '(' || '{' || '[') {
            stack.push(arr.shift())
        }
        if (val === '}' || ']' || ')') {
            if (val === stack[stack.length - 1]) {
            stack.pop()
            } else return false
        }
    })
    return true
}

isBalanced(parens)