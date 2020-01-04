import React,{Component,Fragment} from "react";
import {Redirect} from "react-router-dom";

//assets
import "../assets/css/pages/Posts.css";

//components
import PostList from "../components/containers/PostList";
import AddPostForm from "../components/containers/AddPostForm";
import Loading from "../components/global/Loading";

class Posts extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            isLogged:null,
            loading:true,
            posts:[]
        }

        this.handleGetPost = this.handleGetPost.bind(this);
    }

    handleGetPost(){
        this.setState({
            loading:true
        })
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.status===200 && xhr.readyState===4){
                let res = JSON.parse(xhr.responseText);
                this.setState({
                    posts:res,
                    loading:false
                })
            }

        };

        xhr.open("GET","https://pratices.000webhostapp.com/post2.php",true);
        xhr.send();
    }

    componentDidMount(){
     
      this.handleGetPost();
           
      this.myInterval = setInterval(()=>{
        if(localStorage.getItem("isLogged")==="true"){
            this.setState({
                isLogged:true   
            })
            
        }else{
            this.setState({
                isLogged:false
            })
        }
      },100);
    }

    componentWillUnmount(){
        clearInterval(this.myInterval);
    }

    render(){
        const {isLogged,loading,posts} = this.state;
        if(loading){
            return <Loading/>;
        }else{
            if(isLogged === false){
                return <Redirect to="/login"/>;
            }else{
                return(
                    <Fragment>
                        <div className="ctr-posts">
                            <AddPostForm/>
                            <PostList posts={posts}/>
                        </div>
                    </Fragment>
                );      
            }
        }
    }
} 
export default Posts;