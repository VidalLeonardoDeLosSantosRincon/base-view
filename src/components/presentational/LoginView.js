import React,{Fragment} from "react";

//assets
import "../../assets/css/presentational/LoginView.css";

const LoginView = ({form,onChange,onClick}) =>(
    <Fragment>
        <div id="ctr-login-form">
            <h4 id="title">Login</h4>
            <form action="" id="login-form">
                <input className="field" 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email" 
                        value={form.email? form.email : ""}
                        onChange={onChange}/>

                <input className="field" 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Password" 
                        value={form.password? form.password : ""}
                        onChange={onChange}/>
                
                <input className="btn" id="btn-login" type="button" value="Log in" onClick={onClick}/>
                <input className="btn" id="btn-cancel" type="button" value="Cancel" onClick={onClick}/>
            </form>
        </div>
    </Fragment>
);

export default LoginView;