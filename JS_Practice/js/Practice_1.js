(function(){
angular.module("myApp",[])
.controller("myCtrl",function($scope){
	$scope.my_value = false;
	$scope.check_all = function(master,group){
		var ch_arr = document.getElementsByClassName(group);
		 for(var i=0; i < ch_arr.length; i++){
			 var id = document.getElementById(ch_arr[i].id);
			 
			 id.checked = master.checked;
			 $scope.my_value = true;
		 }
	}	
})	
})();

