// 1) add an event listen to #click-me
// 2) store inputs as variables using .value
// 3) Function logic (Max age-cur age)*(drinks per day)*365
// 4) Output answers for the user to see

document.querySelector('#click-me').onclick = function(){
	var myAge = document.querySelector('#age').value;
	var maxAge = document.querySelector('#max-age').value;
	var favDrink = document.querySelector('#item').value;
	var drinksPerDay = document.querySelector('#num-per-day').value;
	myAge = parseInt(myAge);
	maxAge = parseInt(maxAge);
	drinksPerDay = parseInt(drinksPerDay);
	var drinksLeft = (maxAge-myAge) * drinksPerDay * 365;
	document.querySelector('#solution').innerHTML =drinksLeft;
	document.querySelector('#drink').innerHTML=favoriteDrink;
}
