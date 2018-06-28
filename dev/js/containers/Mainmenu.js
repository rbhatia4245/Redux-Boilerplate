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
									<div id='links'>
					 				<div><a href="#" onClick={()=>this.props.clickMenu()}>Home</a></div>
									<div><a href="#"  onClick={()=>this.props.clickMenu()}>About</a></div>
					 				<div><a href="#" onClick={()=>this.props.clickMenu()}> Work</a></div>
					 				<div><a href="#" onClick={()=>this.props.clickMenu()}>Contact</a></div>
					 				</div>
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