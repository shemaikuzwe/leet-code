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
    // const neededDashes = nums.length - uniqueCount;
    // let newArray = existing;
    // if (neededDashes) {
    //     const dashes = getDashes(neededDashes)
    //     newArray = existing.concat(dashes)
    // }
    // return newArray
    return existing;
};


//return desired dashes
// var getDashes = (n) => {
//     const dashes = []
//     for (let i = 0; i < n; i++) {
//         dashes.push("_")
//     }
//     return dashes
// }

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));