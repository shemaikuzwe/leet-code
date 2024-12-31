/**
 * @param {string[]} s
 */
const lengthOfSliding = (s) => {
    let left = 0, ans = 0; curr = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "0") {
            curr++;
        }
        while (curr > 1) {
            if (s[left] == "0") {
                curr--
            }
            left++
        }

        ans = Math.max(ans, i - left + 1)
    }
    return ans;
}

console.log(lengthOfSliding("1101100111"));