app.controller('EndController', ['$scope','$firebaseArray','$location','FBURL','$rootScope',function($scope,$firebaseArray, $location,FBURL,$rootScope ){
	
	  $scope.getOrig = function() {
        return $rootScope.test;
    };
}]);


