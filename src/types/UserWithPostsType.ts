import {IPost} from "../interfaces/IPost";
import {IUser} from "../interfaces/IUser";

export type UserWithPostsType = IUser & { posts: IPost[] }