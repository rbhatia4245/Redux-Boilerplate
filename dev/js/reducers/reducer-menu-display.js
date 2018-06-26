export default function(state = null, action) {
	switch(action.type){
		case 'MENU_CLICKED':
			return !state;
			break;
			case 'MENU_AREA':
			return null;
			break;
	}
	return state;
}