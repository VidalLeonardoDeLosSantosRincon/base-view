import React,{Fragment} from "react";

import PostView from "../presentational/PostView";

const PostList = ({posts})=>{
    return(
        <Fragment>
            {
                posts.map((post,index)=>{
                   return <PostView key={`post_${index}`} post={post}/>;
                })
            }
        </Fragment>
    )
}

export default PostList;