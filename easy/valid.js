/**
 * This program checks if a given s containing bracets is valid or not
 * @param {string} s
 * @return {boolean}
 */


const isValid = (s) => {
    const stack = [];
    const mapping = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of s) {
        if (mapping[char]) {
            stack.push(char)
        } else {
            const curr = stack.pop();
            if (char !== mapping[curr]) {
                return false;
            }
        }
    }

    return stack.length === 0 ? true : false
}



console.log(isValid("([[[]])"));