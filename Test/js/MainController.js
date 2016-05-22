angular.module('MyApp', [])
.controller('MainController', [ '$scope', function($scope) {

  $scope.data = [[0, 1],[2, 3]];

  $scope.students = [];

  var student = {};
  student.firstName = "Student 1";
  $scope.students[0] = student;
  
  var student1 = {};
  student1.firstName = "Student 2";
  $scope.students[1] = student1;
  
  var student2 = {};
  student2.firstName = "Student 3";
  $scope.students[2] = student2;
  
  var student3 = {};
  student3.firstName = "Student 4";
  $scope.students[3] = student3;
  
  
  $scope.counter = 0;
  
  $scope.incrementCounter = function() {
    
    $scope.counter++;
  }
}]);