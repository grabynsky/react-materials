import {IUser} from "../interfaces/IUser";
import {IPost} from "../interfaces/IPost";
import {createContext, useContext} from "react";

type StoreType = {
    userStore: {
        allUsers: IUser[],
        setFavoriteUser: (obj: IUser) => void,
    },

    postStore: {
        allPosts: IPost[]
    },

}

const defaultValue: StoreType = {
    userStore: {
        allUsers: [],
        setFavoriteUser: ()=>{},
    },

    postStore: {
        allPosts: []
    }
}
export const MyContex = createContext<StoreType>(defaultValue);

export const useContexProvider = (): StoreType => useContext(MyContex)