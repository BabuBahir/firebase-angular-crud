app.controller('EndController', ['$scope','$firebaseArray','$firebaseObject','FBURL','$rootScope',function($scope,$firebaseArray,$firebaseObject,FBURL,$rootScope ){

	
	var json =[];
	var ref = new Firebase("https://test-55ef7.firebaseio.com/Response/");
	 ref.orderByChild("User").on("child_added", function(snapshot) {
		var test ={};		 
		test['a'] = 'test';
		test['b'] = [];          // Array
		test['b'].push(snapshot.val().QuestionID);
		test['b'].push(snapshot.val().ResponseID);
		test['b'].push(snapshot.val().User);
		json.push(JSON.stringify(test));	  
	});
	$scope.result=json;


	// access name from Rootobject	
	$scope.getOrig = function() {
	return $rootScope.test;
	};

}]);


