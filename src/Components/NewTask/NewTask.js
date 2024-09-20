import React from "react";
import './NewTask.css';

const NewTask = props => {

    let enteredText = '';

    const addTaskHandler = event => {
        event.preventDefault();

        const newTask = {
            id: Math.random().toString(),
            text: enteredText
        };

        props.onAddTask(newTask);
    };

    const textChangeHandler = event => {
        enteredText = event.target.value;
    };

    return (
        <form className="new-task" onSubmit={addTaskHandler}>
            <input type="text" onChange={textChangeHandler}/>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default NewTask;
