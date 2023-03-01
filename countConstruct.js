const countConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === "") return 1;

    let total = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            total += countConstruct(target.slice(word.length), wordBank, memo);
        }
    }

    memo[target] = total;
    return total;
};
