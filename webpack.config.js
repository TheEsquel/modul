module.exports = {

  watch: true,
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: './main.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        },

      ]
      }
    ]
  }
};