/**
 * This program returns the last word of given string
 * @param {string} s 
 */
var lengthOfLastWord = function (s) {
    return s.trim().split(/\s+/).at(-1).length;
};
console.log(lengthOfLastWord("Hello world"));

