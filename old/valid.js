/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) return false;
    let right = s.length - 1;
    let left = 0;
    const brackets = [
        {
            open: "(",
            close: ")"
        },
        {
            open: "{",
            close: "}"
        },
        {
            open: "[",
            close: "]"
        }
    ]

    while (left < right) {
        const curr = s[left];
        const open= brackets.find(item => item.close === curr)?.open ?? false;
        const close = brackets.find(item => item.open === curr)?.close ?? false;
        console.log(open);
        console.log(close);
    //     if (close && close !== s[left + 1]) {
    //         return false
    //     };
    //     if (open && open !== s[right]) {
    //         return false
    //     };
       left++
       right--
    }
    // return true
}


console.log(isValid("(){}"));