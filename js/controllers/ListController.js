app.controller('ListController', ['$scope', '$firebaseArray','$location', '$firebaseObject','FBURL','$rootScope',function($scope, $firebaseArray, $location,$firebaseObject, FBURL,$rootScope){
  
  var products = new Firebase(FBURL);
  $scope.products = $firebaseArray(products);
  
  //deleting previous response
    var ref = new Firebase("https://test-55ef7.firebaseio.com/Response/");
    var allResponse = $firebaseObject(ref)
    allResponse.$remove(); 
  
   //detecting input
	$scope.newValue = function(value) {
		if (value === null){
			$scope.value ='null';
		}
		else{ 
		    $scope.value=value;		 
		}
	};
 
   //adding responses   
   $scope.addProduct = function() {
	    $scope.counter = $scope.counter + 1; 		
		 if($scope.counter >= $scope.products.length)
		 {						 
			 // passing name to rootscope
			 $rootScope.test = $scope.username;
			 // redirecting
			 $location.path('/end');			 
		 };
		var ref = new Firebase("https://test-55ef7.firebaseio.com/Response/");
		var response = $firebaseArray(ref);
		response.$add({
			QuestionID: $scope.products[$scope.counter-1].ques,
			ResponseID: $scope.value,
			answer: $scope.products[$scope.counter-1].answer
		});	
		// after response nullify $scope.value
			$scope.value = false;
	};
	
	$scope.change_formstate = function(){
		$scope.isFormOpen = true;
	};
 
}]);

 