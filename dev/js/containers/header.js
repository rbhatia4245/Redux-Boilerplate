import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMenu} from '../actions/menubutton';
import '../../scss/style.scss';


class Header extends Component {
	render(){
		var headClass="white";
		if(!this.props.tabdisplay)
		{
			headClass="black";
		}
		return(
		<div className={headClass}>	
		<div id="head">
			<span className="ABHISHEK_JASSAL">ABHISHEK JASSAL</span>
			<button type="button" onClick={() => this.props.selectMenu()} >MENU</button>
		</div>
		</div>
		);
	}
	
}
function mapStateToProps(state){
	return {
		tabdisplay:state.tabdisplay,
		menudisplay:state.menudisplay
	}
}
function mapDispatchToProps(dispatch)
{
	return bindActionCreators({selectMenu:selectMenu},dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);