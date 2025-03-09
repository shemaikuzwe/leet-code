/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const charCount = {}; //object map

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let j = 0; j < t.length; j++) {
    const char = t[j];
    if (!charCount[char]) {
      return false;
    }
    charCount[char] --;
  }

  return true;
};
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("aacc", "ccac"));
