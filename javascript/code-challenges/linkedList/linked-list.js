'use strict';

let Node = require('./node.js');

class LL {
  constructor() {
      this.head = null;
      this.lenght = 0;
  };

  insert(val) {
    let newNode = new Node(val);
    this.lenght += 1

    if (!this.head) {
      this.head = newNode
    } else
    newNode.next = this.head;
    this.head = newNode;
  }

  append(val) {
      let newNode = new Node(val);
      this.lenght += 1
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

   insertBefore(val, newVal) {
    let current = this.head;

    if (current.next.val === val) {
      let newNode = new Node(newVal);
       let oldNext = current.next;
      current.next = newNode;
      newNode.next = oldNext;
    } 

    while (current.next) {

     if (current.next.val !== val) {
      current = current.next;
     }

     if (!current.next) {       
      return `Input of'${newVal}' not found`;
    }
    if (current.next.val === val) break
  }
    this.lenght += 1
  }

   insertAfter(val, newVal) {
    let current = this.head;

    if (current.val === val) {
      let newNode = new Node(newVal);
       let oldNext = current.next;
      current.next = newNode;
      newNode.next = oldNext;
    } 

    while (current.next) {

     if (current.val !== val) {
      current = current.next;
     }

     if (!current.next) {       
      return `Input of'${newVal}' not found`;
    }
    if (current.val === val) break
  }
    this.lenght += 1
  }

  kthFromEnd(k) {
    let current = this.head;

    if (k > this.lenght) {
      return 'Input greater than lenght of list';
    }
    if (k < this.lenght) {
      let counter = this.lenght - k;
      while (counter > 0) {
        current = current.next;
        counter -=1
      }
      console.log('kthFromEnd ==>',current.val)
      return current.val
    }
  }
};


module.exports = LL;
