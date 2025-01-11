/**
 * This program sorts an array using bubble sort algo
 * @param {number[]} nums
 * @returns sorted array
 */


const bubbleSort = (nums) => {

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1 ; j++) {
            if (nums[j] > nums[j + 1]) {
                const temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp
            }
        }
    }
    return nums
}

console.log(bubbleSort([1,4,3,6,9,2,5,100,24,]));