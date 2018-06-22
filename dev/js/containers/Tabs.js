import React,{Component} from 'react' ;
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectTab} from '../actions/tab.js';
import '../../scss/tabstyle.scss';
 class Tabs extends Component {
 	render(){
 		return(
 			<div className='tabs'>
 			<button type="button" id="films" onClick={()=>this.props.selectTab('FILM')}>FILMS & MOTIONS</button>
 			<button type="button" id= "visuals" onClick={()=>this.props.selectTab('VISUAL')}>VISUAL DESIGNS</button>
 			</div>
 			);
 	}
 }
 function mapStateToProps(state){
 	return {
 		tabdisplay:state.tabdisplay
 	}
 }
 function mapDispatchToProps(dispatch){
 	return bindActionCreators({selectTab:selectTab}, dispatch);
 }
 export default connect(mapStateToProps, mapDispatchToProps)(Tabs);