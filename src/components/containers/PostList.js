import React,{Fragment} from "react";

import Post from "../containers/Post";

const PostList = ({posts})=>{
    return(
        <Fragment>
            {
                posts.map((post,index)=>{
                   return <Post key={`post_${index}`} post={post}/>;
                })
            }
        </Fragment>
    )
}

export default PostList;