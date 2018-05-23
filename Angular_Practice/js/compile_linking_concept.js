(function(){
	var logscope = null;
	var noDefObjLog = "";
	var postLinkFunLog = "";
	var prePostCompileFun = "";
	
	var logline = function(logVariable, directivName, logString){
		if(logscope){
			logscope[logVariable] += "[" + directivName + "]" + logString + " , " + "\n";
		}else{
			this[logVariable] += "[" + directivName + "]" + logString + "\n";
		}
	};
	
	angular.module("main_module",[])
	.controller("main_controller",function($scope){
		$scope.noDefObjLog = noDefObjLog;
		$scope.postLinkFunLog = postLinkFunLog;
		$scope.prePostCompileFunLog = prePostCompileFunLog;
		logscope = $scope;
	})
	.directive("noDefinitionObj",function(){
		
		//Initializing the directive object 
		logline("noDefObjLog","noDefinitionObj","Initialization");
		
		//Post-link function
		return function(scope,elem,attrs){
			logline("noDefObjLog","noDefinitionObj","post-link " + attrs.noDefinitionObj)
		};
	})
	//postLinkFun 
	.directive("postLinkFun",function(){
		
		logline("postLinkFunLog","postLinkFun","initilizations");
		
		return{
			link : function(scope, elem, attrs){
				logline("postLinkFunLog","postLinkFun","post-link " + attrs.postLinkFun)
			}
		};
	})
	//pre, post, compile function
	.directive("prePostCompileFun",function(){
		logline("prePostCompileFunLog","prePostCompileFun","initialization");
		
		return{
			link:{
				pre : function(scope,elem,attrs){
					logline("prePostCompileFunLog","prePostCompileFun","pre-function")
				},
				post : function(scope,elem,attrs){
					logline("prePostCompileFunLog","prePostCompileFun","Post-function")
				}
				
			},
			compile : function(scope,elem,attrs){
					logline("prePostCompileFunLog","prePostCompileFun","compile")
					return{
						pre : function(scope,elem,attrs){
							logline("prePostCompileFunLog","prePostCompileFun","pre " + attrs.prePostCompileFun)
						},
						post : function(scope,elem,attrs){
							logline("prePostCompileFunLog","prePostCompileFun","post " + attrs.prePostCompileFun)
						}
					}
				}
			
		};
	})
})()