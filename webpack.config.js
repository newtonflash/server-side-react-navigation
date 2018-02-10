const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/')
    },
    watch:true,
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use:'babel-loader'
            }
      ]
    },
    devtool: "source-map"
};