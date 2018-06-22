export default function(state = null, action) {
	switch(action.type){
		case 'MENU_CLICKED':
			return action.payload;
			break;
			case 'MENU_AREA':
			return null;
			break;
	}
	return state;
}