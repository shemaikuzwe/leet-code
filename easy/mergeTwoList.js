/**
 * This program  merge two linked list
 *  @param {NodeL} head1
 * @param {NodeL} head2
 */

function mergeLinkedList(head1, head2) {
    let count = 0;
    let tail = head1;
    let curr1 = head1.next;
    let curr2 = head2;
    while (curr1.next !== null && curr2.next !== null) {
        if (count % 2 == 0) {
            tail.next = curr2;
            curr2 = curr2.next
        } else {
            tail.next = curr1;
            curr1 = curr1.next
        }
        count++;
        tail = tail.next;
    }
    if (curr1 !== null) {
        tail.next = curr1
    }
    if (curr2 !== null) {
        tail.next = curr2
    }
    return head1
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


const q = new NodeL("Q");
const s = new NodeL("S");
const r = new NodeL("R");


q.next = s;
s.next = r

a.next = b;
b.next = c;
c.next = d


console.log(mergeLinkedList(a, q));