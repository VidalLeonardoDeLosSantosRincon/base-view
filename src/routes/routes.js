import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch 
} from "react-router-dom";

//components
import App  from "../components/App";
import Login from "../components/containers/Login";
import Signup from "../components/containers/Signup";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import PageNotFound from "../pages/PageNotFound";

const AppRoutes = ()=>(
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/> 
                <Route exact path="/posts" component={Posts}/> 
                <Route component={PageNotFound}/>
            </Switch>
        </App>
    </Router>
);

export default AppRoutes;