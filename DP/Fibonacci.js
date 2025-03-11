///////////////DP: O(n)//////////////////////
function fibonacciDP(n) {
    if (n <= 1) {
        return n;
    }
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

console.log(fibonacciDP(10)); 

///////////////recursion: O(2^n)////////////////
function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(10));

