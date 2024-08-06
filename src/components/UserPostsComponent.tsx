import React, {FC} from 'react';
import {UserWithPostsType} from "../types/UserWithPostsType";

interface IProps {
    items: UserWithPostsType[]
}

const UserPostsComponent: FC<IProps> = ({items}) => {
    return (
        <div>
            {
                items.map((item, index) =>
                    <div key={index}>
                        {item.name}
                        <ul>
                            {
                                item.posts.map((post, index) => (<li key={index}>{post.title}</li>))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    );
};

export default UserPostsComponent;