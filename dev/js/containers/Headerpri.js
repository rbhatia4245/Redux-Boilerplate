import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMenu} from '../actions/menubutton';
import '../../scss/headerstyle.scss';


class Headerpri extends Component {
	render(){
		return(
		<div id="blankheadpri">	
		<div id="headpri">
			<span className="linkedinicon"><a href="https://www.linkedin.com" target="_blank"><i className="fab fa-linkedin-in"></i></a></span>
			<span className="behanceicon"><a href=""><i className="fab fa-behance"></i></a></span>
			<button type="button" onClick={() => this.props.selectMenu()} >MENU</button>
		</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Headerpri);