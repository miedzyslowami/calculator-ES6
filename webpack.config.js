module.exports = {
  entry: ['./js/app.js','./js/BinaryCalculator.js','./js/Calculator.js','./js/DecCalculator.js'],
  output: {
    filename: './js/out.js'
  },
  watch: true,
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
          test:/\.html$/,
          loader:'raw-loader'
        }

  ]
}
}
