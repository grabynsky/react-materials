import React, {FC} from 'react';
import {IPost} from "../interfaces/IPost";

interface IProps {
    post: IPost,
}

const PostComponent: FC<IProps> = ({post}) => {
    const {id, title} = post;

    return (
        <div>
            {id}. {title}
        </div>
    );
};

export default PostComponent;