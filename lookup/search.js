angular.module("app.search",[]);

angular.module("app.search").directive("search",searchDirective);
angular.module("app.search").controller('SearchCtrl',SearchCtrl);

SearchCtrl.$inject = ['$scope','$location','$window'];


function SearchCtrl($scope,$location,$window){
  $scope.accountNumber = "";
  $scope.errorMsg = "Account Number be of 10 digits"
   $scope.isAccountNumberLegal = $scope.accountNumber.length==10?true:false/*function() {
     if ($scope.accountNumber.length==10) {
       return true;
     }else {
       return false;
     }
   }*/
   $scope.searchAccount = function() {
     if($scope.isAccountNumberLegal){
     // $location.path('details.html');//url for the dashboard
    	 $window.location.href = $location.absUrl().replace('lookup/search.html','details/details.html');
     }else {
    	 $scope.isAccountNumberLegal = true;
        return;
      }
   }
}

function searchDirective() {
    return {
      restrict : 'A',
      link : link,
      controller : 'SearchCtrl',
    }

    function link(scope,attrs,ele) {
      console.log("searchDirective");
    }

}
