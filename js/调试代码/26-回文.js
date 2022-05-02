function isPalindrome(str) {
  if (!typeof str === "string") return false;
  // join 没有参数时默认是逗号分隔符
  return str.split("").reverse().join('') === str;
}

console.log(isPalindrome("12321"));
