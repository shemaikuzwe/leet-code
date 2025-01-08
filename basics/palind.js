/**
 * a program to find a number if it is palindrome or not
 * @description a palindorme number  is a number that is readed the same from begging and from end
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const myS = s.toLocaleLowerCase().trim().replace(/\s+/g, "").replace(/[^a-z0-9]/g, ""); //removes non-alphanumeric characters and remove trailing spaces
    let reversed = ""
    for (let i = myS.length - 1; i >= 0; i--) {
        reversed += myS[i]
    }
    return myS === reversed
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));