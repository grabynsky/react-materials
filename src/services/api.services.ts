import axios, {AxiosResponse} from "axios";
import {IUser} from "../interfaces/IUser";
import {IPost} from "../interfaces/IPost";

const axiosInstance= axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const userService = {
    getUsers: async (): Promise<AxiosResponse<IUser[]>> => {
        return await axiosInstance.get<IUser[]>('/users');
    },
}

const postService = {
    getPosts: async (): Promise<AxiosResponse<IPost[]>> => {
        return await axiosInstance.get<IPost[]>('/posts');
    },
}

export {
    userService,
    postService,
}