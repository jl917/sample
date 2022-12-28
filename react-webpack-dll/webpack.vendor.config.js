const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname);

let config = {
  entry: {
    vendor: ['react', 'react-dom', 'antd']
  },
  output: {
    filename: '[name].dll.js',
    library: '[name]_lib',
    path: path.resolve(__dirname, './src/assets'),
  },
  mode: 'production',
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(ROOT_PATH, 'lib', 'manifest.json'),
      name: '[name]_lib',
      context: ROOT_PATH,
    }),
  ],
};

module.exports = config;