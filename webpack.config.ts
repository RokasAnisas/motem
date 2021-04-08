const path = require("path");
import webpack from "webpack";

const webpackConfig: webpack.Configuration = {
  entry: "./lib/index.ts",
  target: "node",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        use: ["babel-loader"],
      },
    ],
  },
};

export default webpackConfig;
