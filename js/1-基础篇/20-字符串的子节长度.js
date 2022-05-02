function getLen(str) {
  const length = str.length;
  let bytes = 0;
  for (let i = 0; i < length; i++) {
    if (str.charCodeAt(i) > 255) {
      bytes += 2;
    } else {
      bytes++;
    }
  }
  return bytes;
}
// 假设英文字符占一个字节，中文字符占两个字节
console.log(getLen("niahi"));
console.log(getLen("你好啊"));
