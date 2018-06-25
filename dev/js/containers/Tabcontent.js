import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../../scss/tabstyle.scss';
class Tabcontent extends Component {
	render(){
		if(!this.props.tabdisplay)
		{
			return (
				<div id="youtube" >
						<div className="grid-container">
             			<div className="grid-item">1</div>
  						<div className="grid-item">2</div>
 						<div className="grid-item">3</div>
  						<div className="grid-item">4</div>
  						<div className="grid-item">5</div>
  						<div className="grid-item">6</div>
  						<div className="grid-item">7</div>
  						<div className="grid-item">8</div>
  						<div className="grid-item">9</div>
             	</div>
             	</div>
			);
		}
		return (
			<div id="designs">
				<div className="grid-container">
             			<div className="grid-item"><img src={window.location.origin + './images/demoimage.jpg'}/></div>
  						<div className="grid-item">2</div>
 						<div className="grid-item">3</div>
  						<div className="grid-item">4</div>
  						<div className="grid-item">5</div>
  						<div className="grid-item">6</div>
  						<div className="grid-item">7</div>
  						<div className="grid-item">8</div>
  						<div className="grid-item">9</div>
				</div>
			</div>
			);

	}
}
function mapStateToProps(state){
	return {
		tabdisplay:state.tabdisplay
	}
}
export default connect(mapStateToProps)(Tabcontent);