/**
 * 
 * @param {number} x
 * @return {number} x
 */
const reverse=(x)=>{
 const s=Math.abs(x).toString().split("").reverse().join("")
 const reversedNumber=parseInt(s)
 return Math.sign(x) * reversedNumber;
};


console.log(reverse(-321));