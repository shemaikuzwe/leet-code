/**
 * This program returns the square root of a number using binary search algorithm
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let right = x;
    let left = 0;
    while (x) {
        const mid = Math.floor(left +right / 2);
        const next = mid + 1;
        if (mid * mid <= x && next * next > x) {
            return mid
        }
        if (mid * mid < x) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
};

console.log(mySqrt(14));