import {combineReducers} from 'redux';
import  menudisplay from './reducer-menu-display';
import tabdisplay from './reducer-tab';
const allReducers =combineReducers(
{
	menudisplay:menudisplay,
	tabdisplay:tabdisplay
});
export default allReducers;