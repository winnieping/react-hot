# react-hot
模块热替换：页面不用刷新，改动的效果可以直接显示。  

##step1:在之前项目基础上添加react-hot-loader包    

##step2:根目录创建.babelrc文件    

配置babelrc文件  

```
{
  "presets": [
    ["es2015", {"modules": false}],
    // webpack understands the native import syntax, and uses it for tree shaking

    "stage-2",
    // Specifies what level of language features to activate.
    // Stage 2 is "draft", 4 is finished, 0 is strawman.
    // See https://tc39.github.io/process-document/

    "react"
    // Transpile React components to JavaScript
  ],
  "plugins": [
    "react-hot-loader/babel"
    // Enables React code to work with HMR.
  ]
}

```  

##step3:配置webpack.config.js


entry 添加：
'react-hot-loader/patch',
'webpack/hot/only-dev-server',

devServer：
hot: true,
contentBase: resolve(__dirname, 'dist'),
publicPath: '/

plugins：
new webpack.HotModuleReplacementPlugin(),
new webpack.NamedModulesPlugin(),

##step4:
将之前的index.js另存为App.js，新建index.js，引入react-hot-loader的AppContainer如下：
```
const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component></Component>
		</AppContainer>,
		document.getElementById('reactapp')
	);
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  });
}
```

##step5修改App.js 
将App.js改为组件。
