import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Menu extends Component {	
	render(){
		if(!this.props.menudisplay)
		{
			return(

				<div>
				<h1>hi my name is abhishek jassal</h1>
				</div>
				);
		}

				

				return(
			<div>
			<ul>
			 <li key="home">Home</li>
			 <li key="About">About</li>
			 <li key="Work">Work</li>
			 <li key="Contact">Contact</li>
			</ul>
			</div>

			);
	
	}
}
function mapStateToProps(state)
{
	return{
	menudisplay:state.menudisplay
	};
}
export default connect(mapStateToProps)(Menu);
