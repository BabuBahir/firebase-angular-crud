app.controller('EndController', ['$scope','$firebaseArray','$firebaseObject','FBURL','$rootScope',function($scope,$firebaseArray,$firebaseObject,FBURL,$rootScope ){

var ref = new Firebase("https://test-55ef7.firebaseio.com/Response/");
 ref.orderByChild("User").on("child_added", function(snapshot) {
  console.log(snapshot.val().QuestionID + ":"+snapshot.val().ResponseID+":"+ snapshot.val().User );
});

	 // access name from Rootobject	
	  $scope.getOrig = function() {
        return $rootScope.test;
    };
}]);


