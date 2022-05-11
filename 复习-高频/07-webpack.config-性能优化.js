const path = require("path");
const HtmlWebpackPlugin = require("...");
const { resolve } = require("path");

module.exports = {
  // 默认值'./src/index.js'
  entry: "path",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
        includes: [resolve("src")],
        exclude: /node_modules/,
      },
    ],
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.js",
      }),
    ],
  },
};
