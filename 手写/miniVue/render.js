/**
 * h函数
 * @param {string} tag
 * @param {null|object} props
 * @param {null|string|Array} children
 * @returns
 */
const h = (tag, props, children) => {
  return {
    tag,
    props,
    children,
  };
};

/**
 * 挂载函数
 * @param {Object} vnode
 * @param {Object} container
 */
const mount = (vnode, container) => {
  // vnode -> element

  // 1. 根据vnode创建真实dom，并在vnode上面保存
  const el = (vnode.el = document.createElement(vnode.tag));

  // 2. 添加属性及方法
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];
      if (value.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  // 3. 处理children
  if (vnode.children) {
    // 字符串
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
      // 数组
    } else {
      vnode.children.foreEach((item) => {
        // 递归调用
        mount(item, el);
      });
    }
  }

  // 4. 挂载
  container.append(el);
};
/**
 * diff
 * @param {Object} n1 vnode1
 * @param {Object} n2 vnode2
 */
const patch = (n1, n2) => {
  // 节点类型不同
  if (n1.tag !== n2.tag) {
    const n1ParentEl = n1.el.parentElement;
    n1ParentEl.removeChild(n1.el);
    mount(n2, n1ParentEl);
  } else {
    // 1. 取出el, 并在n2中保存
    const el = (n2.el = n1.el);

    // 2. 处理props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};
    // 2.1 将新的newProps添加到el中
    for (const key in newProps) {
      const newValue = newProps[key];
      const oldValue = oldProps[key];
      if (newValue !== oldValue) {
        if (newValue.startsWith("on")) {
          el.addEventListener(key.slice(2).toLowerCase(), newValue);
        } else {
          el.setAttribute(key, newValue);
        }
      }
    }
    // 2.2 删除旧的props
    for (const key in oldProps) {
      if (!(key in newProps)) {
        const value = oldProps[key];
        if (value.startsWith("on")) {
          el.removeEventListener(key.slice(2).toLowerCase(), value);
        } else {
          el.removeAttribute(key, newValue);
        }
      }
    }

    // 3.处理children
    const oldChildren = n1.children || [];
    const newChidlren = n2.children || [];

    if (typeof newChidlren === "string") {
      // 情况一: newChildren本身是一个string
      // 边界情况 (edge case)
      if (typeof oldChildren === "string") {
        if (newChidlren !== oldChildren) {
          el.textContent = newChidlren;
        }
      } else {
        el.innerHTML = newChidlren;
      }
    } else {
      // 情况二: newChildren本身是一个数组
      if (typeof oldChildren === "string") {
        el.innerHTML = "";
        newChidlren.forEach((item) => {
          mount(item, el);
        });
      } else {
        // oldChildren: [v1, v2, v3, v8, v9]
        // newChildren: [v1, v5, v6]
        // 1.前面有相同节点的原生进行patch操作
        const commonLength = Math.min(oldChildren.length, newChidlren.length);
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChidlren[i]);
        }

        // 2.newChildren.length > oldChildren.length
        if (newChidlren.length > oldChildren.length) {
          newChidlren.slice(oldChildren.length).forEach((item) => {
            mount(item, el);
          });
        }

        // 3.newChildren.length < oldChildren.length
        if (newChidlren.length < oldChildren.length) {
          oldChildren.slice(newChidlren.length).forEach((item) => {
            el.removeChild(item.el);
          });
        }
      }
    }
  }
};
