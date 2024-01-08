import React, { useState } from "react"

const ToDoList = ({ task, toggleTaskCompleted, updateImportance }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [importance, setImportance] = useState(task.importance)
    const [name, setName] = useState(task.name)

    const handleImportance = (e) => {
        setImportance(e.target.value)
        task.importance = importance
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const viewTemplate = (
        <div>
            <label className="checkContainer">
                <input
                    id={task.id}
                    type="checkbox"
                    defaultChecked={task.completed}
                    onChange={() => toggleTaskCompleted(task.id)}
                />
                <span className="checkmark"></span>
            </label>
            <label>{`${importance} - ${name}`}</label>
            <button
                onClick={() => { setIsEditing(true) }}
                className="editBtn"
            >
                Edit
            </button>
        </div>
    )

    const editTemplate = (
        <div>
            <form>
                <input
                    id={task.id}
                    type="text"
                    placeholder={name}
                    defaultChecked={task.completed}
                    onChange={handleNameChange}
                    className="addTask"
                />
                <select
                    className="impSelect"
                    onChange={handleImportance}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <button
                    onClick={() => {
                        setIsEditing(false)
                        updateImportance(task.id, importance)
                    }}
                    type="submit"
                    className="doneBtn"
                >
                    Done
                </button>
            </form>
        </div>
    )

    return (
        <li className="toDoTask">
            {isEditing ? editTemplate : viewTemplate}
        </li>
    )
}

export default ToDoList
