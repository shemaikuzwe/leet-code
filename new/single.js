/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

    let exits = [];
    for (let i = 0; i < nums.length; i++) {
        const index = exits.indexOf(nums[i]);
        if (index === -1) {
            exits.push(nums[i])
        } else {
            exits.splice(index, 1);
        }
    }
    return exits[0]
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));