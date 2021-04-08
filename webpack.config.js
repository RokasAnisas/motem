const path = require("path");

module.exports = {
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
