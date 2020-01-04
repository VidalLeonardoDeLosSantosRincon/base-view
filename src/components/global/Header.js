import React,{Fragment,useState,useEffect} from "react";
import {Link} from "react-router-dom";

//assets
import "../../assets/css/global/Header.css";

const Header = () =>{

    const [isLogged,setLogged] = useState(true);
    const [intervalId,setIntervalId] = useState(null);

    useEffect(()=>{
        let inVal = setInterval(()=>{
            if(localStorage.getItem("isLogged")==="true"){
                setLogged(true);
                setIntervalId(inVal);
            }else{
                setLogged(false);
                setIntervalId(inVal);
            }
        },100);
    },[])


    if(isLogged){
        return(
            <Fragment>
                <header className="header">
                <h5 style={{
                    fontWeight:"300",
                    color:"dodgerblue",
                    margin:"0 25px 0 0"}}>{localStorage.getItem("userEmail")}</h5>
                    <ul id="menu">
                        <Link to="/"><li className="menu-item">Home</li></Link>
                        <Link to="/posts"><li className="menu-item">Posts</li></Link>
                        <li className="menu-item" style={{cursor:"pointer"}} onClick={()=>{
                            localStorage.setItem("isLogged",false);
                            clearInterval(intervalId);
                            setLogged(false);
                        }}>logout</li>
                    </ul>
                   
                </header>
            </Fragment>
        );
    }
    return( 
        <Fragment>
            <header className="header">
                <ul id="menu">
                    <Link to="/"><li className="menu-item">Home</li></Link>
                    <Link to="/signup"><li className="menu-item">Signup</li></Link>
                    <Link to="/login"><li className="menu-item">Login</li></Link>
                </ul>
            </header>
        </Fragment>
    );  
};

export default Header;

