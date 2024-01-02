const Buttons = ({ deleteTasks }) => {

    return (
        <button
            onClick={deleteTasks}
            className="delBtn"
        >
            Delete
        </button>
    )
}

export default Buttons
