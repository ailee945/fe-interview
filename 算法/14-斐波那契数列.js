function fibonacci(n) {
  if (n === 1) return 1;
  if (n === 2) return 1;

  let n1 = 1,
    n2 = 2,
    res = 0;
  for (let i = 3; i < n; i++) {
    res = n1 + n2;
    n1 = n2;
    n2 = res;
  }
  return res;
}
console.log(fibonacci(9));
