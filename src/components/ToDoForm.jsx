const ToDoForm = () => {

    //date
    //datetime-local
    //email
    //file
    //hidden
    //image
    //month
    //number
    //password
    //radio
    //range
    //reset
    //search
    //submit
    //tel
    //text
    //time
    //url
    //week
    
    return (
        <div>
            <form> 
                <h2>Add new task here</h2>
                <input 
                    placeholder="New Task" 
                    type="text"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default ToDoForm