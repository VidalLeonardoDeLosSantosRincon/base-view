import React,{Component,Fragment} from "react";

//assets
import "../assets/css/pages/Home.css";

//components
//import bgImage from "../assets/images/home-bg2.jpg"; 
import Loading from "../components/global/Loading";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:true
        }
    }

    componentDidMount(){
        this.setState({
            loading:false
        });
    }
    render(){
        const {loading} = this.state;
        if(loading){
            return <Loading/>;
        }else{
            return(
                <Fragment>
                    <div className="ctr-home">
                        <div id="banner">
                            <h6>Hello World!</h6>
                        </div>
                    </div>
                </Fragment>
            );
        }
    }
}
export default Home;