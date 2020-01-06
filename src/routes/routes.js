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
import MyPosts from "../pages/MyPosts";
import PageNotFound from "../pages/PageNotFound";

const AppRoutes = ()=>(
    <Router>
        <App>
            <Switch>
                <Route exact path="/base-view/" component={Home}/>
                <Route exact path="/base-view/login" component={Login}/>
                <Route exact path="/base-view/signup" component={Signup}/> 
                <Route exact path="/base-view/posts" component={Posts}/>
                <Route exact path="/base-view/myposts" component={MyPosts}/>  
                <Route component={PageNotFound}/>
            </Switch>
        </App>
    </Router>
);

export default AppRoutes;