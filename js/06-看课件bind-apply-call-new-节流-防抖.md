# bind-call-apply-new-节流-防抖

[toc]

## bind

- 第一个参数接收 this 对象
- 返回函数，根据使用方式
  - 直接调用
    - 改变 this 指向
    - 拼接参数
    - 调用函数
  - 构造函数
    - 不改变 this 指向，忽略第一参数
    - 拼接参数
    - new 函数
