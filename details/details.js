angular.module("app.dashboard",[]);
angular.module("app.dashboard").controller('DashboardCtrl',DashboardCtrl);

DashboardCtrl.$inject = ['$scope','$window','$location'];
function DashboardCtrl($scope,$window,$location) {
  $scope.accountList = [
  {firstName: "john", lastName: "smith"},

{firstName: "Samuels", lastName: "Mark"}
  ];
  
  $scope.backMethod = function(){
	  $window.location.href = $location.absUrl().replace('details/details.html','lookup/search.html');
  }
}
