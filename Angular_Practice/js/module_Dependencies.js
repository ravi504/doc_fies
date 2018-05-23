(function(){
	var Base_Pro = function(){
		var pro_id;
		return{
		 setId : function(val){
			pro_id = val;
		},
         $get : function(){
			 return{
				 getProviderID : function(){
					 return pro_id;
				 }
			 };
		 } 		
		};
		
		
	};
	
	angular.module("childpro_1",[])
	.provider("pro1", Base_Pro)
	.config(function(pro1Provider){
		pro1Provider.setId("pro1-childpro_1");
	})
	.provider("pro2",Base_Pro)
	.config(function(pro2Provider){
		pro2Provider.setId("pro2-childpro_1");
	});
	
	angular.module("childpro_2",["childpro_3"])
	.provider("pro1",Base_Pro)
	.config(function(pro1Provider){
		pro1Provider.setId("pro1-childpro_2");
	})
	.provider("pro2",Base_Pro)
	.config(function(pro2Provider){
		pro2Provider.setId("pro2-childpro_2");
	});
	
	angular.module("childpro_3",[])
	.provider("pro3",Base_Pro)
	.config(function(pro3Provider){
		pro3Provider.setId("pro3-childpro_3");
	})
	.provider("pro4",Base_Pro)
	.config(function(pro4Provider){
		pro4Provider.setId("pro4-childpro_3");
	});
	
	angular.module("module_App",["childpro_1","childpro_2"])
	.controller("module_controller",function($scope, pro1, pro2, pro3 ,pro4){
		$scope.Provider1 = pro1;
		$scope.Provider2 = pro2;
		$scope.Provider3 = pro3;
		$scope.Provider4 = pro4;
	});
})();