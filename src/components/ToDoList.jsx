import React from "react"

const ToDoList = ({ task }) => {

    return (
        <li className="ToDoList">
            <input
                id={task.id}
                type="checkbox"
                defaultChecked={task.completed}
            />
            <label>{task.name}</label>
        </li>
    )
}

export default ToDoList
