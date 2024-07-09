import React, {useEffect, useState} from 'react';
import TodoComponent from "../components/todo-component/TodoComponent";
import {ITodo} from "../models/ITodo";

const TodosPage = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(value => {
                setTodos(value)
            })
    }, []);
    return (
        <div>
            <TodoComponent todos={todos}/>
        </div>
    );
};

export default TodosPage;