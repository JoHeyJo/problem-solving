class Solution:
    def rob(self, nums: List[int]) -> int:
        c_House = 0
        a_House = 0
        for i in range(len(nums)):
            c_House = nums[i] + nums[i - 2] if i - 2 >= 0 else nums[i]
            a_House = nums[i - 1] if i - 1 >= 0 else 0
            nums[i] = max(c_House, a_House)
        return max(c_House, a_House)
