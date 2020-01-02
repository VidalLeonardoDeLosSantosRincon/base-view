import React,{useState,useEffect,Fragment} from "react";

//components
import Loading from "../components/global/Loading";

const PageNotFound = () =>{
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setLoading(false);
    },[])

    if(loading){
        return <Loading/>;
    }else{
        return(
            <Fragment>
                <h6 style={{
                    color:"rebeccapurple",
                    fontSize:"30px",
                    fontWeight:"100"
                    
                    }}>This page was not found :(</h6>
            </Fragment>
        );
    }

};

export default PageNotFound;