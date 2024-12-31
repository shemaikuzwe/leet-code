/**
 * a program to perform binary search on a sorted array of numbers.
 * @param {number[]} arr
 * @param {number} x
 * @return {number}
 */

 function bs(arr, x) {
    let left = 0;
    let right = arr.length;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] == x) {
            return mid
        } else if (arr[mid] < x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}


console.log(bs([1, 2, 5, 6, 10], 2));