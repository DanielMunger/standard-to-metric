
var teaspoon_to_metric = function(teaspoon) {
	return teaspoon * 5;
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

$(document).ready(function() {
	$("form#teaspoon").submit(function(event) {
		event.preventDefault();
		var teaspoon = parseFloat($("input#teaspoon").val());
		var teaspoon = teaspoon_to_metric(teaspoon);
		$("#teaspoon-output").text(teaspoon);
	});
	$("form#tablespoon").submit(function(event) {
		event.preventDefault();
		var tablespoon = parseFloat($("input#tablespoon").val());
		var tablespoon = tablespoon_to_metric(tablespoon);
		$("#tablespoon-output").text(tablespoon);
	});
	$("form#oz").submit(function(event) {
		event.preventDefault();
		var oz = parseFloat($("input#oz").val());
		var oz = oz_to_metric(oz);
		$("#oz-output").text(oz);
	});
	$("form#cup").submit(function(event) {
		event.preventDefault();
		var cup = parseFloat($("input#cup").val());
		var cup = cup_to_metric(cup);
		$("#cup-output").text(cup);
	});
	$("form#pint").submit(function(event) {
		event.preventDefault();
		var pint = parseFloat($("input#pint").val());
		var pint = pint_to_metric(pint);
		$("#pint-output").text(pint);
	});
	$("form#quart").submit(function(event) {
		event.preventDefault();
		var quart = parseFloat($("input#quart").val());
		var quart = quart_to_metric(quart);
		$("#quart-output").text(quart);
	});
	$("form#gallon").submit(function(event) {
		event.preventDefault();
		var gallon = parseFloat($("input#gallon").val());
		var gallon = gallon_to_metric(gallon);
		$("#gallon-output").text(gallon);
	});
});
