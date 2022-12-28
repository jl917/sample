const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

let config = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        }
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')],
    }),
    new CopyPlugin({
      patterns: [ { from: 'src/assets', to: 'assets' } ],
    }),
    new HtmlWebpackPlugin({
      title: 'title',
      filename: 'index.html',
      template: './src/app.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(__dirname, 'lib', 'manifest.json')),
      context: path.resolve(__dirname),
  })
  ],
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'all',
    },
  },
};

if (process.env.REPORT) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

if (process.env.NODE_ENV === 'local') {
  config = Object.assign(config, {
    devtool: 'source-map',
    mode: 'development',
    devServer: {
      static: './dist',
      host: 'localhost', // 'localhost',//host: '192.168.0.57',
      hot: true,
      historyApiFallback: true,
      compress: true,
    },
  });
  config.module.rules.push({
    enforce: 'pre',
    test: /\.(js|jsx|ts|tsx)$/,
    loader: 'source-map-loader',
    exclude: /node_modules/,
  });
}

module.exports = config;