import React,{useState,useEffect} from "react";
import {Redirect} from "react-router-dom";

//components
import SignupView from "../presentational/SignupView";
import Loading from "../global/Loading"; 

const Signup = (props) =>{
    const [signupForm,setSignupForm] = useState({});
    const [loading,setLoading] = useState(true);
    const [signed,setSigned] = useState(false);

    const handleOnChange = (e) =>{
        setSignupForm({
            ...signupForm,
            [e.target.name]:e.target.value
        });
    }

    const addUser = ()=>{
        const {email ,password} = signupForm;
        let data ={
            email,
            password
        }
        
       let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.status===200 && xhr.readyState===4){
                let res = JSON.parse(xhr.responseText);

                if(Array.isArray(res)){
                    let msgs="";
                    res.map((msg)=> msgs+=`\n${msg}`)
                    alert(msgs);
                }else{
                    //alert(res);
                    alert("Registred successfully");
                    setSigned(true);
                }
            }
        
        };
        
        xhr.open("POST","https://pratices.000webhostapp.com/user.php",true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(`data=${JSON.stringify(data)}&action=addUser`);
    }

    const handleOnClick = (e)=>{
        if(e.target.id.trim()==="btn-signup"){
            const {email ,password, confirm_password} = signupForm;
            if(email && password && confirm_password){
                if(password.toLowerCase()===confirm_password.toLowerCase()){
                    //alert(`${email} ${password} ${confirm_password}`);
                   addUser();
                }else{
                    alert("Password and Confirm password not match");
                }
            }else{
                alert("Empty fields are not allowed");
            }
        }else if(e.target.id.trim()==="btn-cancel"){
            setSignupForm({});
        }    
    }

    useEffect(()=>{
        setLoading(false);
    },[])

    if(loading){
        return <Loading/>;
    }else{
        if(signed){
            return <Redirect to="/base-view/login"/>;
        }
        return <SignupView form={signupForm} onChange={handleOnChange} onClick={handleOnClick}/>;
    }
}
export default Signup;