var app=angular.module("app",[]);

app.controller("appcont",["$scope",function($scope){

  $scope.name="";
  $scope.password="";

  $scope.click=function(){
    window.location = "display.html";
  }


}]);
