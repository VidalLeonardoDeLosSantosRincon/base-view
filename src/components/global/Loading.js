import React,{Fragment} from "react";

//assets
import "../../assets/css/global/Loading.css";

//components
import loadingImg from "../../assets/images/loading.gif";
const Loading = ()=>(
    <Fragment>
        <div className="ctr-loading">
            <img src={loadingImg} alt="loading-img"/>
        </div>
    </Fragment>
);
export default Loading;