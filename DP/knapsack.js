function knapsack(weights, values, W) {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= W; j++) {
            if (j < weights[i - 1]) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1]);
            }
        }
    }

    return dp[n][W]; 
}

const weights = [1, 3, 4, 5];
const values = [1, 4, 5, 7];
const W = 7;
console.log(knapsack(weights, values, W));
