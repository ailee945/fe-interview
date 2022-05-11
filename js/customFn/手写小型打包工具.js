/**
 * 实现以下两个功能
 * ES6->ES5
 * 支持在 JS 中 import CSS文件
 */

// 1. 安装相应的Babel工具
// yarn add babylon babel-traverse babel-core babel-preset-env

// 2. 引入相关文件
const fs = require("fs");
const path = require("path");
const babylon = require("babylon");
const traverse = require("babel-traverse").default;
const { transformFromAst } = require("babel-core");

// 3. babel 转换代码
function readCode(filePath) {
  // 读取文件内容
  const content = fs.readFileSync(filePath, "utf-8");
  // 生成 AST
  const ast = babylon.parse(content, {
    sourceType: "module",
  });
  // 寻找当前文件的依赖关系
  const dependencies = [];
  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencies.push(node.source.value);
    },
  });
  // 通过 AST 将代码转为 ES5
  const { code } = transformFromAst(ast, null, {
    presets: ["env"],
  });
  return {
    filePath,
    dependencies,
    code,
  };
}
