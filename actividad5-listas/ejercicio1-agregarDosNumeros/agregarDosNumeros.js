class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function addTwoNumbers(l1, l2) {
    let carry = 0;
    const dummyHead = new ListNode(0);
    let current = dummyHead;

    while (l1 || l2) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;
        const total = x + y + carry;
        carry = Math.floor(total / 10);

        current.next = new ListNode(total % 10);
        current = current.next;

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}
module.exports = {addTwoNumbers,ListNode};