def grid_traveler(m, n, memo = {}):
    # base case, there's only one square left to walk
    
    if (m == 1 and n == 1):
        return 1
    
    # invalid state
    if (m == 0 or n == 0):
        return 0
    
    key = (m, n)
    # I generally prefer positive checks over negative (isOdd vs. isNotOdd)
    # however this example avoids some code duplication and tuple construction
    # for base cases
    if key not in memo:
        memo[key] = grid_traveler(m - 1, n, memo) + grid_traveler(m, n - 1, memo)
    return memo[key]

print(grid_traveler(1, 1))
print(grid_traveler(2, 3))
print(grid_traveler(3, 3))
print(grid_traveler(18, 18)) # 2333606220