import React,{Fragment} from "react";

//assets
import "../../assets/css/presentational/PostView.css";

const PostView = ({post}) => (
    <Fragment>   
       <div id="ctr-post">
            <h3 id="name">{post.user}</h3>
            <h6 id="date">{post.date}</h6>    
            <h4 id="text">{post.text}</h4>
               
       </div>
    </Fragment>
);

export default PostView;