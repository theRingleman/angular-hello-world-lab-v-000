function MainController($scope) {
  $scope.name = "Sam";
  $scope.email = 'sam.ringleman@gmail.com';
  $scope.phone = "nope, not on github";
}

angular
  .module("app")
  .controller("MainController", MainController)
