// 单例模式构造器
const FooServiceSingleton = (function () {
  // 隐藏的类构造函数
  const FooService = function () {};
  // 未初始化的单例对象
  let fooService;
  return {
    // 创建/获取单例对象函数
    getInstace() {
      if (!fooService) {
        fooService = new FooService();
      }
      return fooService;
    },
  };
})();

const f1 = FooServiceSingleton.getInstace()
const f2 = FooServiceSingleton.getInstace()

console.log(f1===f2); // true
