import React, { useState } from "react";
import "./App.css";
import TaskList from "./Components/TaskList/TaskList";
import NewTask from "./Components/NewTask/NewTask";

const App = () => {

  const [courseTasks, setCourseTasks] = useState(
    [
      {id:"task1", text:"Install required softwares"},
      {id:"task2", text:"Create react application"},
      {id:"task3", text:"Complete the assignment"},
      {id:"task4", text:"Prepare the quiz questions"},
    ]
  );

  //function to handle new task : add new task into the array (courseTasks)
  const addNewTaskHandler = (newTask) => {
    setCourseTasks((prevCourseTasks) => {
      return prevCourseTasks.concat(newTask);
    });
  };

  return (
    <div className="course-tasks">
      <h2>Course Task</h2>
      
      {/* add new component : NewTask */}
      <NewTask onAddTask={addNewTaskHandler}/>

      {/* props (tasks) holds the array of courseTasks */}
      <TaskList tasks={courseTasks}/>
    </div>
  );
};

export default App;
