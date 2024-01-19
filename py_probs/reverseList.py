class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        [prev, cur, next] = [None, head, None]

        while cur:
            next = cur.next
            cur.next = prev

            prev = cur
            cur = next
        return prev
