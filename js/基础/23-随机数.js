function getRandom(start, end, length) {
  const nArr = [];
  const len = end - start + 1;
  for (let i = 0; i < length; i++) {
    const n = Math.floor(Math.random() * len + start);
    nArr.push(n);
  }
  nArr.sort((a, b) => b - a);
  console.log(nArr);
}

getRandom(10, 100, 100);
