import React, {useEffect, useState} from 'react';
import TodoComponent from "../components/todo-component/TodoComponent";
import {ITodo} from "../models/ITodo";
import {Outlet} from "react-router-dom";

const TodosPage = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then(value => value.json())
            .then(value => {
                setTodos(value.todos)
            })
    }, []);
    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <TodoComponent todos={todos}/>
        </div>
    );
};

export default TodosPage;