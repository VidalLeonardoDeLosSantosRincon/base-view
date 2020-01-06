import React,{useRef} from "react";
import PostView from "../presentational/PostView";


const Post = ({post}) =>{
    const deleteButton = useRef(null);

    /*/////////////method to dele a post///////////////////////////*/
    const handleDeletePost = ()=>{

        const deletePost = window.confirm("Delete post?");
        if(deletePost){
            const parentElementClass = deleteButton.current.parentElement.className;
            const postId = (parentElementClass.substring((parentElementClass.lastIndexOf("_")+1),parentElementClass.length));
            //console.log(postId);

            let data = {
                id:postId
            }
            
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () =>{
                if(xhr.readyState===4 && xhr.status===200){
                    let res =JSON.parse(xhr.responseText);
                    let msg="";
                    if(res===true){
                        msg = "Post deleted";
                    }else{
                        msg = "Post not deleted";
                    }
                    alert(msg);
                }
            };

            xhr.open("POST","https://pratices.000webhostapp.com/post2.php",true);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send(`data=${JSON.stringify(data)}&action=deletePost`);
        }
    }
    /**/////////////////////////////////////////////////////////////////////////// */

    return <PostView post={post} reference={deleteButton} onClick={handleDeletePost}/>
};

export default Post;