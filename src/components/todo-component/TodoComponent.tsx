import React, {FC} from 'react';
import {ITodo} from "../../models/ITodo";
import {Link} from "react-router-dom";

interface IProps{
    todos: ITodo[]
}
const TodoComponent: FC<IProps> = ({todos}) => {
    return (
        <div>
            {
                <ul>
                    {
                        todos.map((todo) => (
                            <li key={todo.id}>
                                <Link to={todo.title.toString()}>
                                    {todo.title}
                                </Link>
                            </li>)
                        )
                    }
                </ul>
            }
        </div>
    );
};

export default TodoComponent;