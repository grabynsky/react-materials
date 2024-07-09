import React from 'react';
import {useParams} from "react-router-dom";

const TodoPage = () => {
    let {id} = useParams()

    return (
        <div>
            Todos Page {id}
        </div>
    );
};

export default TodoPage;