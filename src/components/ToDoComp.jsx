import React, { useState } from "react"
import ToDoForm from "./ToDoForm"
import { nanoid } from "nanoid"
import ToDoList from "./ToDoList"
import Buttons from "./Buttons"

const ToDoComp = () => {

    const [tasks, setTasks] = useState([
        { id: "todo-0", name: "Test", completed: true },
    ])

    const addTask = (name) => {
        if(name !== ""){
        const newTask = { id: `todo-${nanoid()}`, name, completed: false }
        setTasks([...tasks, newTask])
        }
    }

    const toggleTaskCompleted = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (id === task.id) {
                return { ...task, completed: !task.completed }
            }
            return task
        })
        setTasks(updatedTasks)
    }

    const deleteTasks = () => {
        const remainingTasks = tasks.filter((task) => task.completed === false)
        setTasks(remainingTasks)
    }

    const taskList = tasks.map((task) => {
        return <ToDoList
            task={task}
            toggleTaskCompleted={toggleTaskCompleted}
            key={task.id}
        />
    })

    return (
        <div className="ToDoComp">
            <ToDoForm tasks={tasks} addTask={addTask} />
            <Buttons tasks={tasks} deleteTasks={deleteTasks} />
            {taskList}
        </div>
    )
}

export default ToDoComp
