angular.module('MyApp', [])
.controller('MainController', [ '$scope', function($scope) {

  $scope.data = [[0, 1],[2, 3]];

  $scope.students = [];

  var student = {};
  student.firstName = "Student 1";
  $scope.students[0] = student;
  
  student = {};
  student.firstName = "Student 2";
  $scope.students[1] = student;
  
  student = {};
  student.firstName = "Student 3";
  $scope.students[2] = student;
  
  student = {};
  student.firstName = "Student 4";
  $scope.students[3] = student;
  
  
  $scope.counter = 0;
  
  $scope.incrementCounter = function() {
    
    $scope.counter++;
  }
}]);