'use strict';

class Node {
    constructor(val, next) {
        this.val = val;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null
    };

    insert(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
            current = current.next
            }
            current.next = newNode;
        }
        
    }

    includes(val) {
        let current = this.head;
        while(current) {
          if (current.val === val) {
            return true;
        } else if (current.val !== val) {
          current = current.next;
        }
         return false;
      }
    }

    toString() {
        let current = this.head;
        let str = '';
        while(current) {
            if (current !== null) {
               str = `${str} ${current.val} ->`; 
               current = current.next;
            } 
            if (current === null) {
              str = `${str} ${null}`;
            }
        }
      return str
    }

};

let newList = new LL


newList.insert(1);
newList.insert(2);
newList.insert(3);

let inlist = newList.includes(4);

let nodeStr = newList.toString();

console.log('List ===> ', newList)
console.log('Includes ===> ', inlist)
console.log('String ===> ', nodeStr)
