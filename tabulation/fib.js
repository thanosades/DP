const fib = (n) => {
    const tabula = Array(n + 1).fill(0);
    tabula[1] = 1;
    for (let i = 0; i < n; i++) {
      table[i + 1] += table[i]
      table[i + 2] += table[i]
    }
    return table[n];
};
