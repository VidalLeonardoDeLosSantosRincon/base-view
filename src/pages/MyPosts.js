import React,{Component,Fragment} from "react";
import {Redirect} from "react-router-dom";

//assets
import "../assets/css/pages/MyPosts.css";

//components
import AddPostForm from "../components/containers/AddPostForm";
import Loading from "../components/global/Loading";
import PostList from "../components/containers/PostList";

class MyPosts extends Component{

    constructor(props){
        super(props);

        this.state = {
            isLogged:null,
            loading:true,
            myPosts:[]
        };

        this.handleGetMyPosts = this.handleGetMyPosts.bind(this);
    }

    handleGetMyPosts(){
      
        this.setState({
            loading:true
        })
        let user = localStorage.getItem("userEmail");
        let data = {
            user
        }
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.status===200 && xhr.readyState===4){
                let res = JSON.parse(xhr.responseText);
                //let res = xhr.responseText;

                this.setState({
                    myPosts:res,
                    loading:false
                })
             
            }

        };

        xhr.open("POST","https://pratices.000webhostapp.com/post2.php",true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(`data=${JSON.stringify(data)}&action=getPost`);
    }

    componentDidMount(){

        this.handleGetMyPosts();
        
        this.setState({
            loading:false
        });

        this.myinterval = setInterval(() => {
            if(localStorage.getItem("isLogged")==="true"){
                this.setState({
                    isLogged:true
                });

            }else{
                this.setState({
                    isLogged:false
                });
            }
            
        }, 100);
    }

    componentWillUnmount(){
        clearInterval(this.myinterval);
    }

    render(){
        const {loading,isLogged,myPosts} = this.state;

        if(loading){
            return <Loading/>
        }else{
            if(isLogged === false){
                return <Redirect to="/base-view/login"/>;
            }else{
                return(
                    <Fragment>
                        <div id="ctr-myposts">
                            <AddPostForm/>
                            <PostList posts={myPosts}/>
                        </div>
                    </Fragment>
                );
            }
        }   
    }
}
export default MyPosts;