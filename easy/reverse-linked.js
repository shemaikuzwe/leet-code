/**
 * This program reverses a linked list
 *  @param {NodeL} head
 */

function reverseLinkedList(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        const next=curr.next;
        curr.next=prev // reversing arrow to point to prev node 
        prev=curr //set prev to curr
        curr.next=next //set curr to next

    }
    return prev
}
class NodeL {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

const a = new NodeL("A");
const b = new NodeL("B");
const c = new NodeL("C");
const d = new NodeL("D")

a.next = b;
b.next = c;
c.next = d


console.log(reverseLinkedList(a));

