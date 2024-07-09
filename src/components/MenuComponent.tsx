import React from 'react';
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={''}>Home page</Link>
                </li>

                <li>
                    <Link to={'users'}>users page</Link>
                </li>

                <li>
                    <Link to={'posts'}>post page</Link>
                </li>

                <li>
                    <Link to={'comments'}>comments page</Link>
                </li>

                <li>
                    <Link to={'todos'}>todos page</Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuComponent;