/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const lastIndex = digits.pop() + 1;
  if (lastIndex >= 10) {
    const d = toDigit(lastIndex);
    for (let i = 0; i < d.length; i++) {
      digits.push(d[i])
    }
  } else {
    digits.push(lastIndex)
  }
  return digits
};
/**
 * @param {number} num
 * @description
 * transfrom an integer number to a valid digit from 0 to 9
 */
function toDigit(num) {
  const d = [];
  const nums = num.toString();
  for (let i = 0; i < nums.length; i++) {
    d.push(parseInt(nums[i]))
  }

  return d
}

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));