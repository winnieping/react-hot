import * as ActionTypes from '../../actions/info/ActionTypes';

var initialState = {
	desc:'info',
	wData:null
};
export default function(state = initialState,action) {
	switch(action.type) {
		case ActionTypes.INFO_GET_FORECAST:
		return Object.assign({},state,{wData:action.data.HeWeather5});
		default:
		return state;
	}
}