const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/chapter-01/index.js',
  mode: 'development',
  devServer: {},
  output: {
    filename: "bundle.js",//输出文件的名称
    path: path.resolve(__dirname, "dist")//输出文件到磁盘的目录，必须是绝对路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './index.html'
    })
  ]
}
