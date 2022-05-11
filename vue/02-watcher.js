// 目标(发布者)
// Dependency
class Dep {
  constructor() {
    // 存储所有的观察者
    this.subs = [];
  }
  // 添加观察者
  addSub(sub) {
    if (sub && sub.update) {
      this.subs.push(sub);
    }
  }
  // 通知所有观察者
  notify() {
    this.subs.forEach((sub) => sub.update());
  }
}

// 观察者(订阅者)
class Watcher {
  update() {
    console.log("update");
  }
}

// 测试
let dep = new Dep();
let watcher = new Watcher();
dep.addSub(watcher);
dep.notify();
