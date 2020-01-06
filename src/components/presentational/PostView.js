import React,{Fragment} from "react";

//assets
import "../../assets/css/presentational/PostView.css";

const PostView = ({post,reference,onClick}) => {

    let currentUser = localStorage.getItem("userEmail"); 
    return(
        <Fragment>   
            <div id= "ctr-post" className={`ctr_post_${post.id}`}>
                    {
                    (currentUser ===post.user)?<button id="btn-delete" ref={reference}  onClick={onClick}>x</button>:null
                    }
                    <h3 id="name">{post.user}</h3>
                    <h6 id="date">{post.date}</h6>    
                    <h4 id="text">{post.text}</h4>   
            </div>
        </Fragment>
    );
}

export default PostView;