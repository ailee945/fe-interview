# node

[toc]

## express 中 next 的作用？

next 是 中间件函数的第三参数

- 执行 next()，控制权交给下个中间件
- 不执行
  - 终止请求
  - 挂起请求

## 对比 express 和 koa？

- Handler 处理方式
  - Express：回调函数
  - Koa：Async / Await
- 中间件
  - Express：同一线程，线性传递
  - Koa：洋葱模型，级联传递
- 响应机制
  - Express：res.send 立即响应
  - Koa：设置ctx.body，可累加，经过中间件后响应
