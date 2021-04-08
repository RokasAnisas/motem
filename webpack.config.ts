const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './lib/index.ts',
  target: 'node',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  }
}