// for (var i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }

// 6 6 6 6 6 6

for(var i = 1; i<=5; i++){
  (function(j){
    setTimeout(() => {
      console.log(j);
    }, 0);
  }(i))
}
console.log(i); // 6


// for (var i = 0; i < 6; i++) {
//   setTimeout(() => {
//     console.log(i);
//   });
// }
// 1 2 3 4 5 6
