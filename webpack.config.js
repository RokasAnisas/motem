const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ShebangPlugin = require("webpack-shebang-plugin");

module.exports = {
  entry: {
    index: "./lib/index.ts",
    cli: "./lib/cli.ts",
  },
  target: "node",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new ShebangPlugin()],
};
