import React, { useState } from "react"
import ToDoForm from "./ToDoForm"
import { nanoid } from "nanoid"
import ToDoList from "./ToDoList"

const ToDoComp = () => {

    const [tasks, setTasks] = useState([
        { id: "todo-0", name: "Test", completed: true },
    ])

    const addTask = (name) => {
        const newTask = { id: `todo-${nanoid()}`, name, completed: false }
        setTasks([...tasks, newTask])
    }

    const toggleTaskCompleted = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (id === task.id) {
                return { ...task, completed: !task.completed }
            }
            return task
        })
    }

    const taskList = tasks.map((task) => {
        return <ToDoList
            task={task}
            toggleTaskCompleted={toggleTaskCompleted}
        />
    })

    return (
        <div className="ToDoComp">
            <ToDoForm tasks={tasks} addTask={addTask} />
            {taskList}
        </div>
    )
}

export default ToDoComp
