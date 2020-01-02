import React from 'react';
//assets
import '../assets/css/App.css';

//components
import Header from "../components/global/Header";
import Content from "../components/global/Content";
import Footer from "../components/global/Footer";

const App = ({children})=> {
  return(
      <div className="App">
          <Header/>
          <Content body={children}/>
          <Footer/>
      </div>
  );
}
export default App;
