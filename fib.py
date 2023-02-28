def fib(n, memo = {}):
    # check if we have calculated this subproblem before
    if (n in memo):
        return memo[n]
    
    # check for base case
    if (n <= 2):
        return 1
    
    # we haven't calculated this subproblem before so we
    # do it now and store it in the memo
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)

    # return the result that we just stored
    return memo[n]

def fib_alt(n, memo = {}):
    # we're not sure if n will always be 1 or greater, otherwise omit
    if (n <= 2):
        return 1
    
    if (n not in memo):
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo)

    return memo[n]

# print(fib(6))
# print(fib(7))
print(fib_alt(58))
