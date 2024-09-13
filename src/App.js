import React from "react";
import "./App.css";
import TaskList from "./Components/TaskList/TaskList";

const App = () => {
  return (
    <div className="course-tasks">
      <h2>Course Task</h2>
      <TaskList />
    </div>
  );
};

export default App;
