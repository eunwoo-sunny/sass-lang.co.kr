module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.js%/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader'],
      },
    ],
  },
}
