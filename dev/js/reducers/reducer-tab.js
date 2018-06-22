export default function(state=null,action) {
	switch(action.type){
		case 'FILM':
		  return null;
		  break;
		  case 'VISUAL':
		  return 1;
		  break;
	}
	return state;
}