def can_sum(target, nums, memo={}):
    if target in memo:
        return memo[target]
    
    if target == 0:
        return True
    
    if target < 0:
        return False

    for n in nums:
        if can_sum(target - n, nums) == True:
            memo[target] = True
            return memo[target]

    memo[target] = False
    return memo[target]


print(can_sum(300, [7, 14])) # False
print(can_sum(7, [2, 3]))    # True
