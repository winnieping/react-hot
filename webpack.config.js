var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
  entry: [
    // app:[
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:8080/',
      './src/js/index.js',
    // ]
  ],
  output: {
    // path: './build/',
    path: path.join(__dirname, 'build'),
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
        // loader: ['babel-loader'],
        // include: path.join(__dirname, 'js') 
      },
      { 
        test: /\.scss$/, 
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=512&&name=image/[name].[ext]?[hash]'
      }
    ]
  },
  devServer:{
  //     contentBase: '',  //静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
  //     devtool: 'eval',
      hot: true,        //自动刷新
      // contentBase: resolve(__dirname, 'dist'),
      historyApiFallback: true,
      publicPath: '/'
  //     inline: true,    
  //     port: 3005        
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),//开启热替换插件
      new webpack.NamedModulesPlugin()
  ],
}
module.exports = config;