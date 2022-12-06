import React from "react";

function Todo(props) {
    function handleRemove(todo) {
        props.removeTodo(props.todo)
    }
    return (
        <li>{props.todo} <button onClick={handleRemove}>X</button></li>
    )
    
}

export default Todo;