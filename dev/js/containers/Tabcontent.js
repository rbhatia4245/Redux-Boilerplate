import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../../scss/tabstyle.scss';
class Tabcontent extends Component {
	render(){
		if(!this.props.tabdisplay)
		{
			return (
				<div id="youtubegallery">
				<div className="container" >
						<div className="row">
             			<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
  						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
 						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
 						</div>
 						<div className="row">
  						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
  						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
  						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
  						</div>
  						<div className="row">
  						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
  						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
  						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
             			</div>
             	</div>
             	</div>
			);
		}
		return (
			<div id="designgallery">
			<div className="container" >
						<div className="row">
             			<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
  						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
 						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
 						</div>
 						<div className="row">
  						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
  						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
  						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
  						</div>
  						<div className="row">
  						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
  						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
  						<div className="col-md-4"><div className="thumbnail"><img src={require('../../../src/images/demoimage.jpg')}/></div></div>
             			</div>
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