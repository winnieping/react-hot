var webpack = require('webpack');
var path = require('path');

var config = {
  entry: {
    app:[
      'webpack-dev-server/client?http://localhost:8082/',
      './src/js/index.js',
    ]
  },
  output: {
    path: './build/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react' 
      },
      { 
        test: /\.scss$/, 
        loaders: ['style','css','sass'] 
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=512&&name=image/[name].[ext]?[hash]'
      }
    ]
  },
  // devServer:{
  //     contentBase: '',  //静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
  //     devtool: 'eval',
  //     hot: true,        //自动刷新
  //     inline: true,    
  //     port: 3005        
  // },
  // plugins: [
  //     new webpack.HotModuleReplacementPlugin(),//开启热替换插件
  //     new webpack.NoErrorsPlugin()
  // ]
}
module.exports = config;