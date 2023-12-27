import React, { useState } from "react"

const ToDoForm = ({ addTask }) => {

    const [taskName, setTaskName] = useState("")
    const [importance, setImportance] = useState(1)

    const handleChange = (e) => {
        setTaskName(e.target.value)
    }

    const handleImportance = (e) => {
        setImportance(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(taskName, importance)
        setTaskName("")
    }

    return (
        <div className="ToDoForm">
            <form onSubmit={handleSubmit}>
                <h2>To-Do List</h2>
                <input
                    placeholder="Add a task"
                    type="text"
                    onChange={handleChange}
                    value={taskName}
                />
                <select
                    onChange={handleImportance}
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
                    type="submit"
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default ToDoForm
