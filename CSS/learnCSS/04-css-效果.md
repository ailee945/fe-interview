# 效果

[toc]

## box-shadow

- 充当没有宽度的边框
- 营造层次感

```css
style{
  /* x偏移量 | y偏移量 | 阴影颜色 */
  box-shadow: 60px -16px teal;

  /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色 */
  box-shadow: 10px 5px 5px black;

  /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  /* 插页(阴影向内) | x偏移量 | y偏移量 | 阴影颜色 */
  box-shadow: inset 5em 1em gold;

  /* 任意数量的阴影，以逗号分隔 */
  box-shadow: 3px 3px red, -1em 0 0.4em olive;
}
```

## text-shadow

## border-radius

尽量使用百分比

## background

- background-position
- background-size: cover container
- background-repeat

## clip-path

对容器进行裁剪(几何体 路径)

## transform 变换

## 面试

- 如何使用div画***（投影）
- 如何产生不占空间的边框
  - box-shadow
  - [outline](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline)
- 如何实现ios图标的圆角(clip-path)
