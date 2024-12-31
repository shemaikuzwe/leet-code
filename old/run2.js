/**
 * 
 * @param {number} s
 * @return {boolean} 
 */
const isPand = (s) => {
    const p = s.toString().split("").reverse().join("");

    if (parseInt(p) == s) return true;
    return false
}

console.log(isPand(-121));