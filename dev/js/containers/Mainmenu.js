import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {clickMenu} from '../actions/menuareaclick.js';
import '../../scss/style.scss';
class Mainmenu extends Component{
render()
{
	                return(
							<div>
								<ul>
					 				<li key="home" onClick={()=>this.props.clickMenu()}><a href="#">Home</a></li>
									<li key="About" onClick={()=>this.props.clickMenu()}><a href="#">About</a></li>
					 				<li key="Work" onClick={()=>this.props.clickMenu()}><a href="#"> Work</a></li>
					 				<li key="Contact" onClick={()=>this.props.clickMenu()}><a href="#">Contact</a></li>
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
export default connect(mapStateToProps,mapDispatchToProps)(Mainmenu);