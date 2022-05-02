String.prototype.customTrim = function () {
  if (!String.prototype.trim) {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  } else {
    return this.trim();
  }
};

let str1 = "   ff   ff";
let str2 = "eee  ";
console.log(str1.customTrim());
console.log(str2.customTrim());

// test the function
var str = " \t\n test string ".trim();
console.log(str == "test string"); // alerts "true"

function foo() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log(i++);
    }, i * 1000);
  }
}

foo();
