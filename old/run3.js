
/**
 * @param {[]} candidates
 * @param {number} target
 */
const cand = (candidates, target) => {
    //initilaze dp
    const dp = [[]] //2d array
    for (let i = 1; i <= target; i++) {
        dp[i] = []
    }
    dp[0].push([]);

    //loop through each value from one target

    for (let i = 1; i <= target; i++) {
        //j will present each candidate repeatdly
        for (j = 0; j < candidates.length; j++) {
            if (candidates[j] <= i) {
                for (const prev of dp[i - candidates[j]]) {
                    const temp = prev.concat(candidates[j]);
                    temp.sort((a, b) => a - b);
                    if (!dp[i].some(comb => comb.join(",") == temp.join(","))) {
                        dp[i].push(temp);
                    }
                }
            }
        }
    }

    return dp[target]
}


console.log(cand([2, 3, 6, 7], 7));