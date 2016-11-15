app.controller('ListController', ['$scope', '$firebaseArray', '$firebaseObject', 'FBURL', function($scope, $firebaseArray, $firebaseObject, FBURL){
  
  var products = new Firebase(FBURL);
  $scope.products = $firebaseArray(products);
  
  $scope.removeProduct = function(id) {
    var ref = new Firebase(FBURL + id);
    var product = $firebaseObject(ref)
    product.$remove();
   };
   
   //detecting input
	$scope.newValue = function(value) {
		$scope.value=value;
	};
   //adding responses
   
   $scope.addProduct = function() {
	    $scope.counter = $scope.counter + 1;
		var ref1 = new Firebase("https://test-55ef7.firebaseio.com/Response/");
		var response = $firebaseArray(ref1);
		response.$add({
			QuestionID: $scope.counter,
			ResponseID: $scope.value
		});	
		// after response nullify $scope.value
			$scope.value = false;
	};
   
}]);

 