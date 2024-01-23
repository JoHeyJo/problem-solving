class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        cost.reverse()
        for i in range(2, len(cost)):
            cost[i] = min(cost[i] + cost[i - 1], cost[i] + cost[i - 2])
        cost.reverse()
        return min(cost[0], cost[1])