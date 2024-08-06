import React from 'react';
import {useContexProvider} from "../contex/ContextProvider";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    const {userStore: {allUsers}} = useContexProvider();
    return (
        <div>
            {
                allUsers.map((user, index) => <UserComponent key={index} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;