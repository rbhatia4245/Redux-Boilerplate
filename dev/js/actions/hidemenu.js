export default function hideMenu(){
	console.log("You clicked to hide menu");
	return {
		type: 'HIDE_MENU',
		nstyle: 'translate3d(-100vw,0,0)'
	}
};