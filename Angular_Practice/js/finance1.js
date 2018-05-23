angular.module("finance1",[])
.factory("convertCurrency",function(){
	var currencies = ["IND","UK","USA"];
	var currencyRate = {
		'IND':2.5,
		"UK":2,
		"USA":3
	};
	var convert = function(amount,incurr,outcurr){
		return amount * currencyRate[outcurr]/currencyRate[incurr];
	};
	var save = function(){
		alert("Your data is saved");
	}
	return{
		currencies : currencies,
		convert : convert,
		save : save
	};
})