import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {ITodo} from "../models/ITodo";
import {IUser} from "../models/IUser";

const TodoPage = () => {
    let {id} = useParams();
    let location = useLocation();
    let state: ITodo = location.state;

    const [user, setUser] = useState<IUser[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/users/' + state.userId)
            .then(response => response.json())
            .then(value => {
                setUser(value)
            })
    }, [id]);

    return (
        <div>
            {/*Todos Page {JSON.stringify(state)}*/}

            {
                JSON.stringify(user)
            }
        </div>
    );
};

export default TodoPage;