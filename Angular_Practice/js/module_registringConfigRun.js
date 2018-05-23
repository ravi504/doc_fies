(function(){
	var ModuleManager = function(){
		var fullname_seprator = " ";
		return{
			setSeprator : function(sep){
				fullname_seprator = sep;
			},
			$get : function(person){
				return{
					firstname : function(){
						return person.firstname;
					},
					lastname : function(){
						return person.lastname;
					},
					fullname : function(){
						return person.firstname + fullname_seprator + person.lastname;
					}
				};
			}
		};
	};
	
	angular.module("module_App",[])
	.value('person',{
		firstname : "",
		lastname  : ""
	})
	.provider("moduleManager",ModuleManager)
	.config(function(moduleManagerProvider){
		moduleManagerProvider.setSeprator("*");
	})
	.run(function(person){
		person.firstname = "Fernando";
		person.lastname = "tourris";
	})
	.controller("module_controller",function($scope,person,moduleManager){
		$scope.personInstance = person;
		$scope.person_personProvider = moduleManager;
	});
})();