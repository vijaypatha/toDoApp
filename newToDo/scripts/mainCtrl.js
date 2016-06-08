angular.module("toDo").controller("mainCtrl", function($scope) {
    $scope.test = "Yes!! Still working"

     $scope.importanceList = ["Important", "Not Important"];
     $scope.urgencyList = ["Urgent", "Not Urgent"];
});
