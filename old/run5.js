const digit_to_letters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
}
var letterCombinations = function (digits) {
    let comb = [""];
    if (!digits || digits == "") return [];
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] == "1") continue;
        const letters = digit_to_letters[digits[i]];
        if (!letters) continue;
        const newComb = [];
        for (const combination of comb) {
            for (const letter of letters) {
                newComb.push(combination + letter)
            }
        }
        comb = newComb;
    }
    return comb
};

console.log(letterCombinations("23"));