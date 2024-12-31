/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let curr = "";
    for (let i = 0; i < haystack.length; i++) {
        if (needle.includes(haystack[i]) && needle.includes(haystack[i + 1])) {
            console.log("next",haystack[i +1]);
            curr += haystack[i];
        }
        console.log(curr);
        if (curr == needle) return haystack.indexOf(curr);

    }
    return -1;
};

console.log(strStr("mississippi", "issip"));