import { useEffect, useState } from "react"
import TodoListItem from "./TodoListItem";

const baseUrl = 'https://dummyjson.com/todos';

export default function TodoList() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchTodos() {
            const response = await fetch(baseUrl);
            const data = await response.json();
            setTodos(data.todos);

        }

        fetchTodos();
    }, []);


   

    const todoClickHander = (todoId) => {
        console.log(todoId);
        setTodos(oldTodos => oldTodos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo))

    };


    return (
        <>
            <h2>Change text-decoration by clicking </h2>
            
            <ul>
                {todos.map(todo =>
                    <TodoListItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.todo}
                        isCompleted={todo.completed}
                        onClick={todoClickHander}
                        

                    />
                )}
            </ul>

        </>
    )

}