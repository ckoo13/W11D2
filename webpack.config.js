// webpack.config.js
var path = require('path');

module.exports = {
  entry: './frontend/todo_redux.jsx',
  output: {
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    fallback: {
        util: require.resolve("util/")
    }
  }
};