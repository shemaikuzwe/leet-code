/**
 * A program that merges 2 linked lists
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode();
    let curr = dummy;
    while (list1 && list2) {
        if (list1.val > list2.val) {
            curr = list2;
            list2 = list2.next
        } else {
            curr.next = list1;
            list1 = list1.next
        }
        curr = curr.next
    }
    curr.next = list1 || list2;
    return dummy.next;
};