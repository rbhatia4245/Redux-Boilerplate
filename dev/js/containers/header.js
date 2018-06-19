import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMenu} from '../actions/menubutton';

class header extends Component {
	render(){
		return(
		<div>
			<h1>Abhishek Jassal</h1>
			<button onClick={() => this.props.selectMenu()} >MENU</button>
		</div>
		);
	}
	
}
function mapDispatchToProps(dispatch)
{
	return bindActionCreators({selectMenu:selectMenu},dispatch);
}
export default connect(mapDispatchToProps)(header);