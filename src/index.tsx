import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import UsersPages from "./pages/UsersPages";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import CustomErrorLayout from "./layout/CustomErrorLayout";
import HomePage from "./pages/HomePage";
import TodosPage from "./pages/TodosPage";
import TodoPage from "./pages/TodoPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <CustomErrorLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPages/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'todos', element: <TodosPage/>, children:[
                    {path:':id', element: <TodoPage/>}
                ]},

            // {path: 'todos/:id', element: <TodoPage/>}
        ]
    },
])

root.render(
    <RouterProvider router={router}/>
);

