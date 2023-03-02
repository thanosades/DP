const bestSum = (target, numbers, memo = {}) => {
    if (memo[target]) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;
    let shortestArr = null;

    for (let num of numbers) {
        const remainder = target - num;
        const res = bestSum(remainder, numbers, memo);
        if (res !== null) {
            const combi = [ ...res, num ];
            if (shortestArr === null || combi.length < shortestArr.length) {
                shortestArr = combi;
            }
        }
    }

    memo[target] = shortestArr;
    return shortestArr;
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
