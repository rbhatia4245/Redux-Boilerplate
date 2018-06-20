import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMenu} from '../actions/menubutton';

class Header extends Component {
	render(){
		return(
		<div>
			<h1>Abhishek Jassal</h1>
			<button type="button" onClick={() => this.props.selectMenu()} >MENU</button>
		</div>
		);
	}
	
}
function mapStateToProps(state){
	return{
		menudisplay:state.menudisplay
	}
}
function mapDispatchToProps(dispatch)
{
	return bindActionCreators({selectMenu:selectMenu},dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
