(function(){
	/* var ModuleProvider = function(){
		return{
			$get : function(person){
				return{
					firstname : function(){
						return person.firstname;
					},
					lastname : function(){
						return person.lastname;
					},
					fullname : function(sep){
						return person.firstname + sep + person.lastname;
					}
				}
			}
		}
	}
	 */
	angular.module("module_App",[])
	.value('person',{
		firstname : "",
		lastname  : ""
	})
	.provider("moduleProvider", function(){// we can also write it as .provider("moduleProvider", ModuleProvider);
	 return{
		 $get : function(person){
			 return{
				 firstname : function(){
					 return person.firstname;
				 },
				 lastname : function(){
					 return person.lastname;
				 },
				 fullname : function(sep){
					 return person.firstname + sep + person.lastname;
				 }
			 }
		 }
	 }	
	})
	.controller("module_controller",function($scope, person, moduleProvider){
		person.firstname = "Peter";
		person.lastname = "willson's";
		
		$scope.personInstance = person;
		$scope.person_personProvider = moduleProvider;
	});
})();