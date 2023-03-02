const allConstruct = (target, wordBank) => {
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            // assume that you get a valid sub result
            const suffixWays = allConstruct(suffix, wordBank);
            // operate on that previous assumption
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

    return result;
};

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));