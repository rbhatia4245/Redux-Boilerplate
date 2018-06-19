export default function showMenu(){
	console.log('You clicked to show menu');
	return {
		type: 'SHOW_MENU',
		nstyle : 'translate3d(0vw,0,0)'
	}
};