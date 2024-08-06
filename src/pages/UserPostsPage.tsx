import React, {useEffect, useMemo, useState} from 'react';
import UserPostsComponent from "../components/UserPostsComponent";
import {useContexProvider} from "../contex/ContextProvider";
import {UserWithPostsType} from "../types/UserWithPostsType";

const UserPostsPage = () => {

    const [userWithPostsState, setUserWithPostsState] = useState<UserWithPostsType[]>([]);

    const {userStore: {allUsers}, postStore: {allPosts}} = useContexProvider();

    const usersWithPostsArray = useMemo(() => {
        return allUsers.map(user => {
            return {...user, posts: allPosts.filter(post => post.userId === user.id)}
        })
    }, [allUsers, allPosts]);

    useEffect(() => {
        setUserWithPostsState(usersWithPostsArray);
    }, [usersWithPostsArray]);

    return (
        <div>
            <UserPostsComponent items={userWithPostsState}/>
        </div>
    );
};

export default UserPostsPage;