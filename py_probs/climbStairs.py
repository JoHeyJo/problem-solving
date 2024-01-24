class Solution:
    def climbStairs(self, n: int) -> int:
        [s1, s2] = [1, 1]
        step = 0
        while step < n - 1:
            next = s1 + s2
            s1 = s2
            s2 = next
            step += 1
        return s2
