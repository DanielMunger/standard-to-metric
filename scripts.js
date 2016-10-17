var teaspoon = parseFloat(prompt("Enter # of teaspoons:"));
var tablespoon = parseFloat(prompt("Enter # of tablespoons:"));
var oz = parseFloat(prompt("Enter # of oz's:"));
var cup = parseFloat(prompt("Enter # of cups:"));
var pint = parseFloat(prompt("Enter # of pints:"));
var quart = parseFloat(prompt("Enter # of quarts:"));
var gallon = parseFloat(prompt("Enter # of gallons:"));

var teaspoon_to_metric = function(teaspoon) {
	return(teaspoon * 5)
};
var tablespoon_to_metric = function(tablespoon) {
	return(tablespoon * 15)
};
var oz_to_metric = function(oz) {
	return(oz * 30)
};
var cup_to_metric = function(cup) {
return(cup * 240)
};
var pint_to_metric = function(pint) {
return(pint * 480)
};
var quart_to_metric = function(quart) {
return(quart * 950)
};
var gallon_to_metric = function(gallon) {
return(gallon * 3800)
};

alert(teaspoon_to_metric(teaspoon));
