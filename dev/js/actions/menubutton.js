export const selectMenu = () => {
	console.log('You clicked on MENU');
	return {
	type:'MENU_CLICKED',
	payload: 'show'
	}
};