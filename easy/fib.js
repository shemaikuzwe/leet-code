/**
 * A program to find fibonacci number 
 * A fibonacci numbers are series of numbers where each number is the sum of the two preceding numbers
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n < 1) return 0
    if (n <= 2) return 1
    let first = 0;
    let second = 1;
    for (let i = 2; i <= n; i++) {
        const temp = first + second;
        first = second;
        second = temp;
    }

    return second
}


console.log(fib(3))