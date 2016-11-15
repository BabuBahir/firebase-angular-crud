app.controller('AddController', ['$scope', '$firebaseArray', '$location', 'FBURL', function($scope, $firebaseArray, $location, FBURL){
	
	$scope.addProduct = function() {
		var ref = new Firebase("https://test-55ef7.firebaseio.com/Response/");
		var product = $firebaseArray(ref);
		product.$add({
			sku: $scope.product.sku,
			description: $scope.product.description,
			price: $scope.product.price
		});
		$location.path('/');
	};
	
}]);


