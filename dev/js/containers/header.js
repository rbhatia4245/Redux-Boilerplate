import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class header extends Component {
	var visibility='false;'
	render(){
		<div>
			<span><h1>Abhishek Jassal</h1></span>
			<span><button type="submit" onMouseDown={this.toggleMenu()}>MENU</button></span>
		</div>
	}
	toggleMenu(){
		if(visibility)
		{
			this.props.
		}
	}
}
function mapStateToProps(state)
{
	menudisplay:state.menudisplay
}
export default connect(mapStateToProps)(header);