import React,{Component,Fragment} from "react";
import {Redirect} from "react-router-dom";

//assets
import "../assets/css/pages/Posts.css";

//components
import PostList from "../components/containers/PostList";
import AddPostForm from "../components/containers/AddPostForm";

class Posts extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            isLogged:null,
            posts:[]
        }

        this.handleGetPost = this.handleGetPost.bind(this);
    }

    handleGetPost(){
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.status===200 && xhr.readyState===4){
                let res = JSON.parse(xhr.responseText);
                this.setState({
                    posts:res
                })
            }

        };

        xhr.open("GET","https://pratices.000webhostapp.com/post2.php",true);
        xhr.send();
    }
    componentDidMount(){
      
        if(localStorage.getItem("isLogged")==="true"){
            this.setState({
                isLogged:true
            })
            this.handleGetPost();
        }else{
            this.setState({
                isLogged:false
            })
        }
    }

  
    render(){
        const {isLogged,posts} = this.state;
        if(isLogged === false){
            return <Redirect to="/login"/>;
        }
        return(
            <Fragment>
                <div className="ctr-posts">
                    <AddPostForm/>
                    <PostList posts={posts.reverse()}/>
                </div>
            </Fragment>
        );
    }
} 
export default Posts;