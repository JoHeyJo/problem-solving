class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []

        def dfs(i, combos, sum):
            if i >= len(candidates) or sum > target:
                return
            if sum == target:
                res.append(combos.copy())
                return

            combos.append(candidates[i])
            dfs(i, combos, sum + candidates[i])

            combos.pop()
            dfs(i + 1, combos, sum)

        dfs(0, [], 0)
        return res
