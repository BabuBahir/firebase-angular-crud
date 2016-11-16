app.controller('ListController', ['$scope', '$firebaseArray','$location', '$firebaseObject', 'FBURL', function($scope, $firebaseArray, $location,$firebaseObject, FBURL){
  
  var products = new Firebase(FBURL);
  $scope.products = $firebaseArray(products);
   //detecting input
	$scope.newValue = function(value) {
		$scope.value=value;		 
	};
   //adding responses
   
   $scope.addProduct = function() {
	    $scope.counter = $scope.counter + 1;
		 if($scope.counter >= $scope.products.length)
		 {		
			 alert('Thankyou !!!');
			 $location.path('/add');			 
		 };
		var ref1 = new Firebase("https://test-55ef7.firebaseio.com/Response/");
		var response = $firebaseArray(ref1);
		response.$add({
			QuestionID: $scope.counter,
			ResponseID: $scope.value,
			User: $scope.username
		});	
		// after response nullify $scope.value
			$scope.value = false;
	};
   
}]);

 