/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let visited = new Set()
  while (head) {
    if (visited.has(head)) return true;
    visited.add(head)
    head = head.next
  }
  return false;
};

// tortise and hare algo with a slow and fast pointer
var hasCycle = function (head) {
  let [slow, fast] = [head, head]
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

