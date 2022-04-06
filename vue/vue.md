# Vue

[toc]

## 对比 React 、Angular 和 Vue

 Vue 官方在 [《对比其他框架》](https://leetcode-cn.com/link/?target=https%3A%2F%2Fcn.vuejs.org%2Fv2%2Fguide%2Fcomparison.html%3FfileGuid%3Dkc8dyHpRxGjrjvyy) 中说明

## 如何实现一个组件，前端组件的设计原则是什么？

- 单一原则：一个组件只做一件事
- 通过脑图、结构图，标识组件的 State Props Methods 生命周期，表示层次和数据流动关系
- State 和 Props
  扁平化：最多使用一层嵌套，便于对比数据变化，代码更简洁
  无副作用：State 仅响应事件，不受其他 State 变化影响
- 松耦合
  - 组件应该独立运行，不依赖其它模块
- 配置、模拟数据、非技术说明文档、helpers、utils 与 组件代码分离
- 视图组件只关心 视图，数据获取，过滤，事件处理应在外部 JS 或 父组件 - 中处理
- Kiss原则（Keep it Simple Stupid）
  - 不需要 State 时，使用 函数组件
  - 不要传递不需要的 Props
  - 及时抽取复杂组件为独立组件
  - 不要过早优化
- 参考 CSS 的 OOSS 方法论，分离 位置 和 样式，利于实现皮肤
- 考虑 多语言、无障碍 等后期需求

## computed 与 watch 的区别？

computed：

- 支出数据缓存
- 内部数据改变也会触发
- 不支持异步，异步无效
- 适用于一个属性由其他属性计算而来，依赖其他属性的场景

watch：

- 不支持数据缓存
- 可以设置一个函数，有两个参数，新旧数据
- 支持异步
- 监听数据必须是data中声明获过的或者父组件传递过来的props中的数据
  - immediate：组件加载立即触发回调函数执行
  - deep深度监听

## Vue.nextTick 原理和作用？

### 原理

1. vue 里面用到了观察者模式，默认组件渲染的时候，会创建一个 watcher，并且渲染视图
2. 当渲染视图的时候，会取 data 中的数据，触发属性的 get 方法，就让这个属性的 dep 记录watcher（注意：每一个data属性都对应一个dep）
3. 同时让 watcher 也记住 dep ，dep 和 watcher 是多对多的关系，因为一个属性可能对应多个视图，一个视图对应多个数据
4. 如果数据发生变化，也就是在 set 的时候，会触发 dep.notify() ，通知 dep 中存放的 watcher 去更新
5. 每次更新数据都会同步调用 watcher 中 update 方法，此时就可以将更新的逻辑缓存起来，等会同步更新数据的逻辑执行完毕后，依次调用 (去重的逻辑)

### 作用

Vue 在更新 DOM 时是异步执行的，当数据发生变化，Vue 将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新

this.$nextTick() 的作用就是可以将里面的回调函数延迟下次 DOM 更新循环结束之后执行。在修改数据之后立即使用这个方法，获取更新后的 DOM。

this.$nextTick() 和 Vue.nextTick 一样，不同的就是回调的 this 自动绑定到调用他的实例上

```vue
<template>
    <h1 ref="hello">{{ value }}</h1>
    <button @click="get">点击</button>
</template>
<script>
  export default {
    data() {
      return {
        value: '原始值'
      };
    },
    methods: {
      get() {
        this.value = '更新值';
        console.log(this.$refs['hello'].innerText); // 原始值
        this.$nextTick(() => {
          console.log(this.$refs['hello'].innerText); // 更新值
        });
      }
    }
  }
</script>
```

## Vue3.x 的新特性

|项目|Vue2|Vue3|
|:---:|:---:|:---:|
|API风格|Options API|Composition API|
|组件生命周期|`beforeCreate` `created` `beforeMount` `mounted` `beforeUpdate` `updated` `beforeDestory` `destoryed` `actived` `deactived` `errorCaptured`|`onMounted()` `onUpdated()` `onUnmounted()` `onBeforeMount()` `onBeforeUpdate()` `onBeforeUnmount()` `onErrorCaptured()` `onRenderTracked()` `onRenderTriggered()` `onActivated()` `onDeactivated()` `onServerPrefetch()`
|
|指令生命周期|`bind` `inserted` `update` `componentUpdated` `unbind`|`beforeMount` `mounted` `beforeUpdate` `updated` `beforeMount` `unmounted`|
|数据|`data`|`ref` `reactive`(torefs)|
|监听|`watch`|`watch` `watchEffect`|
|slot|slot使用插槽 slot-scope给插槽绑定数据|v-slot：插槽名给插槽绑定数据|
|v-model|.async 绑定属性和 update:+ 属性名 事件|无需修饰|
|新功能||Teleport Suspense（实现骨架屏） defineAsyncComponent定义异步组件 允许多个根结点|
|性能||使用Proxy代替defineProperty相应式 标记节点类型，diff时跳过静态节点 支持ES6引入方法，按需编译 Vite|
