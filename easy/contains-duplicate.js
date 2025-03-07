/**
 * This program checks if an array contains duplicate elements.
 * and return true if found 
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {

    //create a hash set
    const hash = new Set();

    for (const num of nums) {
        if (hash.has(num)) {
            return true;
        }
        hash.add(num)
    }
    return false
};

console.log(containsDuplicate([1, 2, 3, 1]));