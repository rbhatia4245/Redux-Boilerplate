import React,{Component} from 'react';
import '../../scss/Singlevideo.scss';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMenu} from '../actions/menubutton';
class Singlevideo extends Component{
	render(){
		return(
				<div>
					<div id="head">
						<span className="ABHISHEK_JASSAL"><b>ABHISHEK JASSAL</b></span>
						<button type="button" onClick={() => this.props.selectMenu()} >MENU</button>
					</div>
					<div id="youtubevideo">
					<iframe src="https://www.youtube.com/embed/rVDKa3lY8To"></iframe>
					</div>
					<div id="description">
							<div id="category">
								<b>Category</b>
								<div id="fetchcategory">
								<p>category</p>
								</div>
								<br/>
								<b>Notes</b>
								<div id="fetchnotes">
								<p>notes</p>
								</div>
							</div>
					<div id="title">
					<p id="nametitle">Title</p>
					<br/>
					<p id="subtitle">Subtitle</p>
					<br/>
					<p id="titletext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis lectus eget arcu ornare, eget interdum massa egestas. Nunc finibus euismod placerat. Morbi ex tellus, rhoncus nec tincidunt in, interdum ac lectus. Fusce aliquet quam non odio rhoncus, a aliquam orci finibus. Cras efficitur tortor et dui venenatis tempus. Sed ultrices tristique est non efficitur. Aenean felis elit, porttitor non tortor tincidunt, maximus tristique neque. Phasellus at ligula sed justo placerat lobortis.</p>
					</div>
					</div>
					<div className="container">
						  <ul className="pager">
						    <li className="previous"><a href="#">{'\u003C'} Previous Project</a></li>
						    <li className="next"><a href="#">Next Project {'\u003E'}</a></li>
						  </ul>
						</div>
					<div className="footervs">
						<p>Abhishek Jassal {'\u00A9'} All Rights Reserved</p>
		    		</div>

				</div>


			);
	}
}
function mapStateToProps(state)
{
	return{
			manudisplay:state.menudisplay
		}	
}
function mapDispatchToProp(dispatch)
{
	return bindActionCreators({selectMenu:selectMenu},dispatch);
}
export default connect(mapStateToProps, mapDispatchToProp)(Singlevideo);