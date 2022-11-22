const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/chapter-01/index.js',
  mode: 'development',
  devServer: {},
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './index.html'
    })
  ]
}
