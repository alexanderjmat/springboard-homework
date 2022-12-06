import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

function TodoList() {
    const INITIAL_STATE = [
        "wash dishes", "do laundry"
    ]
    const [todos, setTodos] = useState(INITIAL_STATE)
    function addTodo(todo) {
        setTodos(todos => [...todos, todo])
    }
    function removeTodo(todo) {
        setTodos(todos.filter(t => t != todo))
    }

    return (
        <div>
            <h2>Fun with Boxes!</h2>
            <NewTodoForm addTodo={addTodo}/>
            <div>
                <ul>
                {todos.map(todo => <Todo todo={todo} removeTodo={removeTodo}/>)}
                </ul>
            </div>
        </div>
    )
}

export default TodoList;
