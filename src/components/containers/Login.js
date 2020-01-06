import React,{useState,useEffect} from "react";
import {Redirect} from "react-router-dom";

//components
import LoginView from "../presentational/LoginView";
import Loading from "../global/Loading";

const Login = ()=>{
    const [loginForm,setLoginForm] = useState({});
    const [loading,setLoading] = useState(true);
    const [logged,setLogged] = useState(false)

    const handleOnChange = (e)=>{
        setLoginForm({
            ...loginForm,
            [e.target.name]:e.target.value
        });
    };

    const logUser =()=>{
        const {email ,password} = loginForm;
        let data = {
            email,
            password
        }
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.status===200 && xhr.readyState===4){
                let res = JSON.parse(xhr.responseText);
                console.log(res);
                if(Array.isArray(res)){
                    let msgs="";
                    res.map((msg)=> msgs+=`\n${msg}`)
                    alert(msgs);
                }else{
                    localStorage.setItem("userEmail",email);
                    alert(res);
                    setLogged(true);
                
                }
            }
        };

        xhr.open("POST","https://pratices.000webhostapp.com/user2.php",true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(`data=${JSON.stringify(data)}&action=logUser`);
    }

    const handleOnClick = (e)=>{
        if(e.target.id.trim()==="btn-login"){
            const {email ,password} = loginForm;
            if(email && password){
                //alert(`${email} ${password}`);
                logUser();
            }
            else{
                alert("Empty fields are not allowed");
            }
        }else if(e.target.id.trim()==="btn-cancel"){
            setLoginForm({});
        }    
    }

    useEffect(()=>{
        setLoading(false);
    },[])
    
    if(loading){
        return <Loading/>;
    }else{
        if(logged){
            localStorage.setItem("isLogged",logged);
            return <Redirect to="/base-view/posts"/>;
        }
        localStorage.setItem("isLogged",false);
        return <LoginView form={loginForm} onChange={handleOnChange} onClick={handleOnClick}/>;
    }
}
export default Login;