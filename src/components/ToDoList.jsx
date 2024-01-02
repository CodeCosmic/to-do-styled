import React, { useState } from "react"

const ToDoList = ({ task, toggleTaskCompleted }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [importance, setImportance] = useState(task.importance)
    const [name, setName] = useState(task.name)

    const handleImportance = (e) => {
        setImportance(e.target.value)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const viewTemplate = (
        <div>
            <input
                id={task.id}
                type="checkbox"
                defaultChecked={task.completed}
                onChange={() => toggleTaskCompleted(task.id)}
            />
            <label>{`${importance} - ${name}`}</label>
            <button
                onClick={() => { setIsEditing(true); console.log(`${isEditing} from ${task.name}`) }}
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
                    onClick={handleImportance}
                    className="impSelect"
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                <button
                    onClick={() => setIsEditing(false)}
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
