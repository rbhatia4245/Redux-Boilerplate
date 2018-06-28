import React from 'react';
import Header from '../containers/header';
import Menu from '../containers/menu';
import Tabs from '../containers/Tabs';
import Tabcontent from '../containers/Tabcontent';
import Headerpri from '../containers/Headerpri';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {clickMenu} from '../actions/menuareaclick.js';
import '../../scss/style.scss';
import Mainmenu from '../containers/Mainmenu';
import Footer from '../containers/footer';
class App extends React.Component{ 
	render()
	{
		let menuclasses="menu open";
		let mainclass="noscroll";
		if(!this.props.menudisplay)
		{
			menuclasses="menu";
			mainclass="scroll";
		}

		return(
				    <div className={mainclass}>
				    <div className={menuclasses}> 
				    <Mainmenu />
				    </div>
				    <Menu />
				    <Header />
				    <Tabs />
				    <Tabcontent />
				    <Footer />
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
export default connect(mapStateToProps,mapDispatchToProps)(App);
