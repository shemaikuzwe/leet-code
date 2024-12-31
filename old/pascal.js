var generate = (numRows) => {
    if (numRows <= 1) return [[1]];
    const ans = [[1]]; //initilaze the first row 
    for (let i = 1; i < numRows; i++) {
        const prevRow = ans[i - 1];
        const currentRow = [1];
        for (let j = 1; j < prevRow.length; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }
        currentRow.push(1);
        ans.push(currentRow);
    }
    return ans
};
var getRow = function (rowIndex) {
    const ans = [[1]]; //initialize first row
    for (let i = 1; i < rowIndex + 1; i++) {
        const prevRow = ans[i - 1];
        const currentRow = [1] //initilize current row
        for (let j = 1; j < prevRow.length; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }
        currentRow.push(1) //all rows ends with 1
        ans.push(currentRow);
    }
    
    return ans[rowIndex ]
};
console.log(getRow(3));
//console.log(generate(4));