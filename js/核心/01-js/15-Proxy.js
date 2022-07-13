const info = {
  name: "jang",
  age: 18,
};
const handler = {
  get(target, name, receiver) {
    console.log("getter", target, name);
    return target[name];
  },
  set(target, name, value, receiver) {
    console.log("setter", value);
    target[name] = value;
  },
};
const infoProxy = new Proxy(info, handler);
infoProxy.name = "lee";
console.log("last row", infoProxy.name);
console.log("last row", info.name);

// Proxy的作用

// 拦截和监视外部对对象的访问;
// 降低函数或类的复杂度;
// 在复杂操作前对操作进行校验或对所需资源进行管理;

// handler的13个拦截器
// // 在读取代理对象的原型时触发该操作，比如在执行 Object.getPrototypeOf(proxy) 时。
// handler.getPrototypeOf()

// // 在设置代理对象的原型时触发该操作，比如在执行 Object.setPrototypeOf(proxy, null) 时。
// handler.setPrototypeOf()

 
// // 在判断一个代理对象是否是可扩展时触发该操作，比如在执行 Object.isExtensible(proxy) 时。
// handler.isExtensible()

 
// // 在让一个代理对象不可扩展时触发该操作，比如在执行 Object.preventExtensions(proxy) 时。
// handler.preventExtensions()

// // 在获取代理对象某个属性的属性描述时触发该操作，比如在执行 Object.getOwnPropertyDescriptor(proxy, "foo") 时。
// handler.getOwnPropertyDescriptor()

 
// // 在定义代理对象某个属性时的属性描述时触发该操作，比如在执行 Object.defineProperty(proxy, "foo", {}) 时。
// andler.defineProperty()

 
// // 在判断代理对象是否拥有某个属性时触发该操作，比如在执行 "foo" in proxy 时。
// handler.has()

// // 在读取代理对象的某个属性时触发该操作，比如在执行 proxy.foo 时。
// handler.get()

 
// // 在给代理对象的某个属性赋值时触发该操作，比如在执行 proxy.foo = 1 时。
// handler.set()

// // 在删除代理对象的某个属性时触发该操作，比如在执行 delete proxy.foo 时。
// handler.deleteProperty()

// // 在获取代理对象的所有属性键时触发该操作，比如在执行 Object.getOwnPropertyNames(proxy) 时。
// handler.ownKeys()

// // 在调用一个目标对象为函数的代理对象时触发该操作，比如在执行 proxy() 时。
// handler.apply()

 
// // 在给一个目标对象为构造函数的代理对象构造实例时触发该操作，比如在执行new proxy() 时。
// handler.construct()
