/**
 * 实现Storage，使得该对象为单例，并对localStorage进行封装设置值setItem(key,value)和getItem(key)
 */

class Storage {
  constructor() {
    if (!Storage.instance) {
      Storage.instance = this;
    }
    return Storage.instance;
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
  setItem(key, value) {
    return localStorage.setItem(key, value);
  }
}

// 功能测试
let a = new Storage();
let b = new Storage();
a === b; // true
a.setItem("a", "a");
b.getItem("a"); // 'a'
