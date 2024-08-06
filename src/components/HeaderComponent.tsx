import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <>
         <ul>
             <li><Link to={'users'}>users</Link></li>
             <li><Link to={'posts'}>posts</Link></li>
             <li><Link to={'userPosts'}>user with posts</Link></li>
         </ul>
        </>
    );
};

export default HeaderComponent;