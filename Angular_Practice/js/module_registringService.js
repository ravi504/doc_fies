(function(){
	/* var PersonManage = function(person){
		this.personInstance = person;
	};
	 PersonManage.prototype.firstname = function(){
		 return this.personInstance.firstname;
	 };
	 PersonManage.prototype.lastname = function(){
		 return this.personInstance.lastname;
	 };
	 PersonManage.prototype.fullname = function(sep){
		 return this.personInstance.firstname + sep + this.personInstance.lastname;
	 }
	 */
	angular.module("module_App",[])
	.value('person',{
		firstname : "",
		lastname : ""
	})
	 
	.service("personManager",function(person){ // we can also write .service("personManager", PersonManage);
		this.personInstance = person;
		
		this.firstname = function(){
			return this.personInstance.firstname;
		}
		this.lastname = function(){
			return this.personInstance.lastname;
		}
		this.fullname = function(sep){
			return this.personInstance.firstname + sep + this.personInstance.lastname
		}
	})
	.controller("module_controller",function($scope,person,personManager){
		person.firstname = "will";
		person.lastname = "smith";
		
		$scope.person_instanceManager = personManager;
	})
})();