(function(){
	angular.module("module_App",[])
	.value('person',{
		firstname : "",
		lastname  : "",
		
		fullname : function(){
			return this.firstname + " " + this.lastname;
		}
	})
	.controller("module_controller",function($scope,person){
		person.firstname = "jack";
		person.lastname = "smith";
		
		$scope.Instance_person = person;
	})
})();