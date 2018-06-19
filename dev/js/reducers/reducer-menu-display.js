export default function(state = null, action) {
	switch(action.type) {
		case 'SHOW_MENU':
			return action.nstyle;
			break;
		case 'HIDE_MENU':
			return action.nstyle;
			break;
	}
	return state;
}