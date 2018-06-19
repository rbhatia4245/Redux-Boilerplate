import {combineReducers} from 'redux';
import  menudisplay from './reducer-menu-display';

const allReducers =combineReducers(
{
	menudisplay:menudisplay
});
export default allReducers;