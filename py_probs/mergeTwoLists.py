class Solution:
    def mergeTwoLists(self, list1: ListNode, list2: ListNode) -> ListNode:
        dummy = node = ListNode()

        while list1 and list2:
            if list1.val < list2.val:
                node.next = list1
                list1 = list1.next
            else:
                node.next = list2
                list2 = list2.next
            node = node.next

        node.next = list1 or list2

        return dummy.next

# Why we need a dummy list assigned to the actual list:

# The dummy node is used as a placeholder to simplify the merging process. It allows us to easily attach nodes to the new list without having to check if the list is empty.
# The actual list pointer starts at dummy and moves through the new list as nodes are added. The dummy node itself does not contain any data from list1 or list2; it's just a starting point.
# Why a new ListNode is assigned to list.next and not list.val:

# Since list starts at the dummy node, we don't want to overwrite dummy's value (which is usually null or some default value). Instead, we want to start adding the merged nodes from list1 and list2 as new nodes starting from dummy.next.
# This ensures that the merged list is built from nodes following the dummy node.
# The line list = list.next:

# After attaching a new node to list.next, we need to move the list pointer forward. This line ensures that list always points to the last node in the new list, so that the next node can be correctly attached to it in the subsequent iterations.
# Why dummy.next is returned and not list:

# At the end of the function, list points to the last node in the merged list, but we need to return the head of the new list.
# Since the dummy node was used as a starting point and does not contain data from list1 or list2, the actual head of the merged list is dummy.next.
# Returning dummy.next effectively returns the first node of the merged list, skipping over the placeholder dummy node.

# Why can't the starting point the be `list = new ListNode()`?
# ChatGPT
# The reason we use a dummy node as a starting point, rather than directly using list = new ListNode(), is primarily for simplicity and to avoid handling special cases when starting the merge.

# Here's the breakdown:

# Avoiding Special Cases at the Start: If we start directly with list = new ListNode(), the first node of list would initially be a part of the merged list. This means we would need additional logic at the beginning to determine whether to use list1 or list2 for the first node's value, and this logic would have to be separate from the main merging loop. This can complicate the code.

# Simplifying the Merge Loop: By using a dummy node, we ensure that the merge loop can always proceed without worrying about whether we're at the beginning of the list. We don't need to treat the first addition of a node from list1 or list2 as a special case.

# Returning the Merged List: At the end of the merge process, if we had started with list = new ListNode(), list would be pointing to the last node in the merged list, and we would have needed to keep an additional reference to the head of the list to return it. With a dummy node, dummy.next will always point to the head of the merged list, which makes it easy to return.

# In essence, the dummy node acts as a placeholder to simplify the code logic. It avoids special-case handling at the start of the merging process and makes it straightforward to return the head of the new merged list.




