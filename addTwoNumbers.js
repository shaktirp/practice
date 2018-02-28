function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var root = null
    var ptr = null
    var carry = 0
    while (l1.next && l2.next) {
        var val = l1.val + l2.val + carry
        if (val > 9) {
            val = val % 10
            carry = Math.floor(val/10)
        } else {
            carry = 0
        }

        if(!root) {
            root = new ListNode(val)
            ptr = root
        } else {
            ptr.next = new ListNode(val)
            ptr = ptr.next
        }
        l1 = l1.next
        l2 = l2.next
    }

    if(l1.val && l2.val) {
        var val = l1.val + l2.val + carry
        if (val > 9) {
            val = val % 10
            carry = Math.floor(val/10)
        } else {
            carry = 0
        }

        if(!root) {
            root = new ListNode(val)
            ptr = root
        } else {
            ptr.next = new ListNode(val)
            ptr = ptr.next
        }
        l1 = l1.next
        l2 = l2.next
    }

    return root
};

list1 = 

addTwoNumbers()
