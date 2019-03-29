const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const webpackConfig = require("./webpack.config.base");

const browserConfig = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"],
  },
  module: {
    rules: [
       webpackConfig.baseLoaders.ts,
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: "style-loader",
      //     },
      //     ...webpackConfig.baseLoaders.scss,
      //   ],
      // },
      // webpackConfig.baseLoaders.file,
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
};

const serverConfig = {
  entry: './src/server/index.tsx',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"],
  },
  module: {
    rules: [
       webpackConfig.baseLoaders.ts,
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: "style-loader",
      //     },
      //     ...webpackConfig.baseLoaders.scss,
      //   ],
      // },
      // webpackConfig.baseLoaders.file,
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
};

module.exports = [browserConfig, serverConfig];
