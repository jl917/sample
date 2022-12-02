const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
var glob = require("glob")

let config = {
  entry: ['./src/index.jsx'],
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
          target: 'es2015'
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')],
    }),
    new HtmlWebpackPlugin({
      title: 'title',
      filename: 'index.html',
      template: './src/app.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __ROUTES__: JSON.stringify(getRoutes()),
    }),
  ],
};

function getRoutes () {
  const modules = glob.sync('./src/pages/**/*.page.jsx');
  const routes = [];

  for (const item of modules) {
    let newPath = item.replace('./src/pages', '').replace('.page.jsx', '');
    let elementPath = item.replace('./src/pages', '').slice(0, -4);
    routes.push({ path: newPath, elementPath, });

    if (newPath.endsWith('index')) {
      newPath = newPath.slice(0, -5);
      routes.push({ path: newPath, elementPath });
    }
  }
  return routes;
}

module.exports = config;