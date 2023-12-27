import React from "react"

const ToDoList = ({ task, toggleTaskCompleted }) => {

    return (
        <li className="ToDoList">
            <input
                id={task.id}
                type="checkbox"
                defaultChecked={task.completed}
                onChange={() => toggleTaskCompleted(task.id)}
            />
            <label>{`${task.importance} - ${task.name}`}</label>
        </li>
    )
}

export default ToDoList
