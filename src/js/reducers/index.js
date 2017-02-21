import {combineReducers} from 'redux';
import info from './info';

//合并个模块的reducer
var appReducer = combineReducers({
	info
});
export default appReducer;