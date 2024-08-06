import React, {FC} from 'react';
import {IUser} from "../interfaces/IUser";
import {useContexProvider} from "../contex/ContextProvider";

interface IProps {
    user: IUser,
}

const UserComponent: FC<IProps> = ({user}) => {
    const {id, name} = user;
    const {userStore:{setFavoriteUser}} = useContexProvider();
    return (
        <div>
            {id} - {name} <button onClick={()=> setFavoriteUser(user)}>set as favorite</button>
        </div>
    );
};

export default UserComponent;