import React, {useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {MyContex} from "./contex/ContextProvider";
import {IUser} from "./interfaces/IUser";
import {IPost} from "./interfaces/IPost";
import {postService, userService} from "./services/api.services";


const App = () => {


    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [favoriteUserState, setFavoriteUserState] = useState<IUser | null>(null)

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getPosts().then(value => setPosts(value.data));
    }, []);


    const setFavoriteUser = (obj: IUser) => {
        setFavoriteUserState(obj)
    }


    const value = {
        userStore: {
            allUsers: users,
            setFavoriteUser: (obj: IUser) => setFavoriteUser(obj)
        },

        postStore: {
            allPosts: posts
        },


    }
    return (
        <>
            <MyContex.Provider value={value}>
                <HeaderComponent/>
                <Outlet/>
            </MyContex.Provider>

            <hr/>
            {favoriteUserState && <div>{favoriteUserState.email}</div>}
            <hr/>
        </>
    );
};

export default App;
