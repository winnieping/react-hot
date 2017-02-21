import React from 'react';
//连接到reduce store
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/info/actions';



var Info = React.createClass({
	componentDidMount() {
		this.props.actions.getForecast("chengdu");
	},

	render: function () {
		var info = this.props.info;
		var wData = info.wData && info.wData[0] || null;
		var infoList =[];
		if(!wData){
			return (
				<div>Info</div>
			);
		}
		return(
			<div>
				<div>Info</div>
					<p>城市：{wData.basic.city}</p>
       				<p>白天：{wData.daily_forecast[0].cond.txt_d}</p>
       				<p>温度：{wData.daily_forecast[0].tmp.min} 到 {wData.daily_forecast[0].tmp.max} ℃</p>
			</div>
			)
	}
});

//映射state到props
const mapStateToProps = (state,ownProps) =>{
	return{
		info:state.app.info
	}
};
//映射dispatch到props
const mapDispatchToProps = (dispatch,ownProps) =>{
	var boundActionCreators = bindActionCreators(actions,dispatch);
	return {
		actions:boundActionCreators
	};
};
// export default Info;
export default connect (
	mapStateToProps,
	mapDispatchToProps
)(Info);