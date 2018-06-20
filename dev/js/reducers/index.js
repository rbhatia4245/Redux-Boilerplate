import {combineReducers} from 'redux';
import  menudisplay from './reducer-menu-display';
import menuareaclick from './reducer-menu-area';
const allReducers =combineReducers(
{
	menudisplay:menudisplay
});
export default allReducers;