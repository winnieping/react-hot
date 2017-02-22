import React from 'react';
import { render } from 'react-dom';
import {Router,browserHistory} from 'react-router';
import rootRoute from './routers';
//添加reducer
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configStore from './configStore';


var store = configStore();

// ReactDOM.render(
// 	<Provider store={store}>
// 		<Router history={browserHistory} routes={rootRoute}></Router>
// 	</Provider>,
// 	document.getElementById('reactapp')	
// );


export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory} routes={rootRoute}></Router>
			</Provider>
		);
	}
}