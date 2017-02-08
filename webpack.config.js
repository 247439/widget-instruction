'use strict';

let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    widget: ['./src/widget/widget'],
    main: ['./src/main.js']
  },

  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: '[name].js'
  },

  resolve: {
    modules: ['node_modules', 'src']
  },

  module: {

    loaders: [{
      test:    /\.js$/,
      // include: __dirname + '/src',
      loader:  'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test:   /\.css$/,
      loader: 'style!css!autoprefixer?browsers=last 2 versions'
    }, {
      test:   /\.less$/,
      loader: 'style!css!less'
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]?[hash]'
    }]

  },
  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: true})
  ]
};
