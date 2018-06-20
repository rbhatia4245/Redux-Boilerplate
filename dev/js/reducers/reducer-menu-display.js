export default function(state = null, action) {
	switch(action.type){
		case 'MENU_CLICKED':
			return 1;
			break;
	}
	return state;
}
