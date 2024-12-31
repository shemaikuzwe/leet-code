/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function (num, t) {
  let op = 0;
  let sln = 0;
  const sum = num + 1
  const diff = num - 1
  op = sum - diff;
  op *= t
  sln = num + op
  return sln
};



console.log(theMaximumAchievableX(1, 50));