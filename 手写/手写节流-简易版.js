const throttle = function (fn, delay = 100) {
  return function () {
    let timer = null;
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
};

async function fn() {
  return 100;
}
(async function () {
  console.log(fn());
  console.log(await fn());
})();

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .catch(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
    throw new Error("err");
  })
  .catch(() => {
    console.log(2);
    throw new Error("err2");
  })
  .then(() => {
    console.log(3);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
    throw new Error("err");
  })
  .catch(() => {
    console.log(2);
  })
  .catch(() => {
    console.log(3);
  });

(async function () {
  console.log("start");
  const a = await 100;
  console.log("a", a);
  const b = await Promise.resolve(200);
  console.log("b", b);
  const c = await Promise.reject(300);
  console.log("c", c);
})();
