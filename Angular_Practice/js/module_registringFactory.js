(function(){
	
	/* var PersonService = function(person){
		var personInstance = person;
		
		return{
			firstname : function(){
				return personInstance.firstname;
			},
			lastname : function(){
				return personInstance.lastname;
			},
			fullname : function(sep){
				return personInstance.firstname + sep + personInstance.lastname;
			}
		};
	}
	 */
	angular.module("module_App",[])
	.value('person',{
		firstname : "",
		lastname : ""
	})
	.factory("personService", function(person){//we can also write .factory("personService", PersonService);
	 var personInstance = person;
	 return{
		 firstname : function(){
			 return personInstance.firstname;
		 },
		 lastname : function(){
			 return personInstance.lastname;
		 },
		 fullname : function(sep){
			 return personInstance.firstname + " " + sep + " " + personInstance.lastname;
		 }
	 }
	})
	.controller("module_controller",function($scope, person, personService){
		person.firstname = "Adam";
		person.lastname = "crooks";
		
		$scope.personInstance = person;
		$scope.person_instanceService = personService;
	});
})();