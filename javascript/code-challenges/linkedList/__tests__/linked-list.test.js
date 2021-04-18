'use strict';

const LL = require('../linked-list.js');

xdescribe('Linked List Test', () => {
    it('Creates a new list: head = null', () => {
        let ll = new LL();
        expect(ll.head).toBeNull();
    })

    it('Should link new node to previous tail', () => {
        let ll = new LL();
        
        ll.insert('node 1')
        expect(ll.head.val).toEqual('node 1');

        ll.insert('node 2')
        expect(ll.head.next.val).toEqual('node 2');
    })

    it('Should return true if input val is in the list : else false', () => {
        let ll = new LL();
        
        ll.insert('node 1');
        ll.insert('node 2');

        let inList = ll.includes('node 2')
        let notIn = ll.includes('not in')

        expect(inList).toEqual(true);
        expect(notIn).toEqual(false);
    })

    it('Should stringify node.val. eg: "1 -> 2 -> null"', () => {
        let ll = new LL();
        
        ll.insert(1);
        ll.insert(2);

        let str = ll.toString();

        expect(str).toEqual(' 1 -> 2 -> null');
    })
})