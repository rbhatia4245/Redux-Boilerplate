import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {clickMenu} from '../actions/menuareaclick.js';
import '../../scss/style.scss';
class Menu extends Component {	
	render(){
		let menuclasses="menu open";
		if(!this.props.menudisplay)
		{
			menuclasses="menu";
		}
		
				return(
						<div>
							<div id="intro">
							<h1><span id="hello">hello, my name is</span><br/><div id="abhishek">ABHISHEK JASSAL</div><span id="visualdesigner">Visual Designer & Filmmaker</span></h1>
							<div className="workLine"><div className="verticaltext"><div className="work">WORK</div><div className="line"></div></div></div>
							</div>
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