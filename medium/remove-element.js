/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const exits = [];

    for (const curr of nums) {
        if (exits.indexOf(curr) == -1) {
            exits.push(curr)
        }
        else if (exits.indexOf(curr) !== -1) {
            if (exits.indexOf(curr) !== exits.lastIndexOf(curr)) {
                nums.splice(nums.indexOf(curr), 1)
            }
            else {
                exits.push(curr)
            }
        }
    }
    
    return nums
};


console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));

