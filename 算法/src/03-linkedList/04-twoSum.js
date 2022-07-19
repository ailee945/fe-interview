// 参考 https://leetcode-cn.com/problems/add-two-numbers/solution/liang-shu-xiang-jia-xian-du-ti-du-ti-fen-oda7/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode(0)
    let p1 = l1
    let p2 = l2
    let p3 = l3
    let carry = 0
    while(p1 || p2){
        const val1 = p1 ? p1.val : 0
        const val2 = p2 ? p2.val : 0
        const val = val1 + val2 + carry
        carry = Math.floor(val/10)
        p3.next = new ListNode(val%10)
        if(p1) p1 = p1.next
        if(p2) p2 = p2.next
        p3 = p3.next
    }
    if(carry) p3.next = new ListNode(carry)
    return l3.next
};
// 时间复杂度O(max(l1,l2))
// 空间复杂度O(max(l1,l2))
