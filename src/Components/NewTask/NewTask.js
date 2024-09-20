import React from "react";
import './NewTask.css';

const NewTask = props => {

    const addTaskHandler = event => {
        event.preventDefault();

        const newTask = {
            id: Math.random().toString(),
            text: 'My New Task!'
        };

        props.onAddTask(newTask);
    };

    return (
        <form className="new-task" onSubmit={addTaskHandler}>
            <input type="text" />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default NewTask;
