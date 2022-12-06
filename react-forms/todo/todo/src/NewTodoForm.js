import React, {useState} from "react"; 

function NewTodoForm(props) {
    const [todo, setTodo] = useState({todo: ""})

    function handleChange(e) {
        const {name, value} = e.target
        setTodo(todo => ({
            ...todo,
            [name]: value
        }) )
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.addTodo(todo.todo)
        setTodo({todo: ""})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" placeholder="todo list item" value={todo.todo} onChange={handleChange}/>
            <button>Add todo</button>

        </form>

    )
}

export default NewTodoForm;
