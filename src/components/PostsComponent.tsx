import React from 'react';
import {useContexProvider} from "../contex/ContextProvider";
import PostComponent from "./PostComponent";

const PostsComponent = () => {

    const {postStore: {allPosts}} = useContexProvider();
    return (
        <>
            {
                allPosts.map((post, index) => <PostComponent key={index} post={post}/>)
            }
        </>
    );
};

export default PostsComponent;