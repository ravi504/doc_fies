(function(){
	angular.module("main_module",[])
	.controller("main_controller",function($scope){
		$scope.message = "This is Template one content";
	})
	.directive("tempOne",function(){
		return{
			template : "This is Template one content"
		}
	})
	.directive("tempTwo",function(){
		return{
			templateUrl : "../../tempTwo.html"
		}
	})
})();