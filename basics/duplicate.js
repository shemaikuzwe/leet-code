var removeDuplicates = function (nums) {
    const existing = [];
    let uniqueCount = 0;
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i]
        if (!existing.includes(curr)) {
            existing.push(curr);
            uniqueCount++;
        }
    }
    return existing;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));