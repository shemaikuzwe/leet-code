/**
 * A simple program that loops through a linked  list
 * @param {NodeL} head
 */

function printLinkedList(head) {
    let curr = head;
    while (curr !== null) {
        console.log(curr.val);
        curr = curr.next;
    }
}


//using recursion
function printLinkedList(head) {
  if(head === null) return;
  console.log(head.val);
  printLinkedList(head.next)
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

printLinkedList(a)
