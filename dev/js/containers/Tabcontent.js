import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../../scss/tabstyle.scss';
class Tabcontent extends Component {
	render(){
		if(!this.props.tabdisplay)
		{
			return (
				<div id="youtube">
			<h1>youtube videos here</h1>
			</div>
			);
		}
		return (
			<div id="designs">
			<h1>Visual Designs Here</h1>
			</div>
			);

	}
}
function mapStateToProps(state){
	return {
		tabdisplay:state.tabdisplay
	}
}
export default connect(mapStateToProps)(Tabcontent);