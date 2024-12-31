const roman = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
];

var romanToInt = function (s) {
    let number = 0;
    for (let i = 0; i < s.length; i++) {
        const currentRoman = roman.find(rom => rom.symbol == s[i]);
        const nextRoman = roman.find(rom => rom.symbol == s[i + 1])
        if (nextRoman && currentRoman.value < nextRoman.value) {
            number -= currentRoman.value;
        } else {
            number += currentRoman.value;
        }
    }
    return number
};

console.log(romanToInt("MCMXCIV"));