const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    cli: "./lib/cli.js",
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
        use: ["babel-loader"],
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: ["shebang-loader", "babel-loader"],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
