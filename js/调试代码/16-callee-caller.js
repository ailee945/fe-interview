let i = 0;

function foo1(para) {
  console.log("参数", para);
  while (i++ < 10) {
    foo1.caller;
  }
}
foo1(1111);
