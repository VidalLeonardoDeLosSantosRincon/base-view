import React,{Fragment} from "react";

//assets
import "../../assets/css/global/Content.css";

const Content  = ({body}) =>(
    <Fragment>
        <div className="ctr-content">
            {body}
        </div>
    </Fragment>
);

export default Content;