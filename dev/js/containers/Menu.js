import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {clickMenu} from '../actions/menuareaclick.js';
import '../../scss/style.scss';
class Menu extends Component {	
	render(){
		if(!this.props.menudisplay)
		{
			return(

				<div id="intro">
				<h1><span id="hello">hello, my name is</span><br/><div id="abhishek">ABHISHEK JASSAL</div><span id="visualdesigner">Visual Designer & Filmmaker</span></h1>
				</div>
				);
		}
				return(
			<div id="menu">
			<ul>
			 <li key="home" onClick={()=>this.props.clickMenu()}>Home</li>
			 <li key="About" onClick={()=>this.props.clickMenu()}>About</li>
			 <li key="Work" onClick={()=>this.props.clickMenu()}> Work</li>
			 <li key="Contact" onClick={()=>this.props.clickMenu()}>Contact</li>
			</ul>
			<p className="inneraj">AJ</p>
			</div>

			);
	
	}
}
function mapStateToProps(state)
{
	return{
	menudisplay:state.menudisplay,
	}
}
function mapDispatchToProps(dispatch)
{
	return bindActionCreators({clickMenu:clickMenu},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu);