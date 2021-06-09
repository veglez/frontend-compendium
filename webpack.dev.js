const path = require('path');
const { merge } = require('webpack-merge');
const { SourceMapDevToolPlugin } = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    // host: '192.168.100.25',
    port: 8020,
    open: true,
    contentBase: [
      path.join(__dirname, './src/assets'),
      path.join(__dirname, './src/assets/images'),
      path.join(__dirname, './src/assets/projects'),
    ],
    historyApiFallback: true,
    // compress: true,
  },

  plugins: [new SourceMapDevToolPlugin()],
  devtool: false,
});
