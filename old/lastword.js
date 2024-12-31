/**
 * 
 * @param {string} s 
 */
// var lengthOfLastWord = function (s) {
//     return s.split(" ")[s.split(" ").length -1].length
// };
var lengthOfLastWord = function (s) {
    return s.trim().split(/\s+/).at(-1).length;
};
console.log(lengthOfLastWord("Hello world"));

