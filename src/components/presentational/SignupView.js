import React,{Fragment} from "react";

//assets
import "../../assets/css/presentational/SignupView.css";

const SignupView = ({form,onChange,onClick}) =>(
    <Fragment>
          <div id="ctr-signup-form">
          <h4 id="title">Sign up</h4>
            <form action="" id="signup-form">
                <input className="field" 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email"
                        value={form.email? form.email:""}
                        onChange={onChange}/>

                <input className="field" 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Password"
                        value={form.password? form.password:""}
                        onChange={onChange}/>

                <input className="field" 
                        type="password" 
                        name="confirm_password" 
                        id="confirm_password" 
                        placeholder="Confirm password"
                        value={form.confirm_password? form.confirm_password:""}
                        onChange={onChange}/>

                <input className="btn" id="btn-signup" type="button" value="Sign up" onClick={onClick}/>
                <input className="btn" id="btn-cancel" type="button" value="Cancel" onClick={onClick}/>
            </form>
        </div>
    </Fragment>
);

export default SignupView;