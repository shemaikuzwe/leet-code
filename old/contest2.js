/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let op=0
  nums.splice(0, 3)
   while (nums.length > 3) {
      nums.splice(0, 3)
      op ++
   }
   if (nums.length < 3) {
      op ++
      nums = []
   }
   console.log(nums.length);
   return op
};

console.log(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7]));
console.log(minimumOperations([4,5,6,4,4]));
console.log(minimumOperations([[6,7,8,9]]));