(function(){
	angular.module("module_App",[])
	.controller("module_controller",function($scope){
		$scope.person = {
			firstname : "jack",
			lastname  : "smith",
			fullname  : function(){
				return this.firstname + " " + this.lastname ;
			}
		}
	})
})()