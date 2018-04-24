(function(){
	angular.module("myApp",[])
	.controller("myCtrl",function(){
		this.qnt = 1;
		this.cost = 2;
		this.inCurr = "IND";
		this.currency = ["USD","IND","UK"];
		this.IntrCurrenctRate = {
			"USD":1.5,
			"IND":1.0,
			"UK":0.5
		};
		this.total = function total(outCurr){
			return this.convertCurrency(this.qnt * this.cost, this.inCurr, outCurr);
		}
		this.convertCurrency = function convertCurrency(amount,inCurr,outCurr){
			return amount * this.IntrCurrenctRate[outCurr] / this.IntrCurrenctRate[inCurr];
		}
		this.save = function save(){
			alert("Save successfully !");
		}
	})
})();