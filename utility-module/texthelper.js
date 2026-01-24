function toUpper(str) {
  return str.toUpperCase();
}

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function charCount(str) {
  return str.length;
}

module.exports = { toUpper, isPalindrome, charCount };
