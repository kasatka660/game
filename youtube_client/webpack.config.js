 var path = require('path');
 var webpack = require('webpack');
 module.exports = {
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };