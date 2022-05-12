/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;
  if (len % 2 === 1) return false;
  const arr = [];
  for (const str of s) {
    if (str === "{" || str === "[" || str === "(") {
      arr.push(str);
    } else {
      const left = arr[arr.length - 1];
      if (
        (str === "}" && left === "{") ||
        (str === "]" && left === "[") ||
        (str === ")" && left === "(")
      ) {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  return arr.length === 0;
};

// 使用map的方法
function isValid2(s) {
  const len = s.length;
  if (len === 0 || len % 2 === 1) return false;
  const map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");
  const arr = [];
  for (const str of s) {
    if (str === "[" || str === "{" || str === "(") {
      arr.push(str);
    } else {
      const left = arr[arr.length - 1];
      if (str === map.get(left)) {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  return arr.length === 0;
}

console.log(isValid2(""));
console.log(isValid2("[[]"));
console.log(isValid2("[[({})]]"));
