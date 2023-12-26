import React, { useState } from "react"

const ToDoForm = ({ addTask }) => {

    const [taskName, setTaskName] = useState("")

    const handleChange = (e) => {
        setTaskName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(taskName)
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
