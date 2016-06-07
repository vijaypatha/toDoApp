angular.module("toDo").service("dataService", function() {

    //Get data from task Array
    this.getTasks = function() {
        return taskArray;
    }

//Delete tasks from "taskArray"
this.removeTask = function(deleteTask){
  for(var i = 0; i < taskArray.length; i++) {
    if(deleteTask === taskArray[i]) {
      taskArray.splice(i--,1);
    }
  }
};

// ***********CONDITIONAL PUSH TO ORIGNAL ARRAY ******************

this.newTask = function(addingTask,dropDown1, dropDown2) {
    if (dropDown1=== "Important" && dropDown2 === "Not Urgent") {
        taskArray.unshift(addingTask);

    } else {
      alert("Please enter a task!");
    }
};

// ***********CONDITIONAL PUSH TO ORIGNAL ARRAY ******************

//Orignal Array. (empty)
var taskArray = [];

}); //main
