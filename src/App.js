// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import {Navbar,NavbarBrand} from 'reactstrap';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const modechange=()=>{
  
    if(mode==="dark"){
      
      // setmode("dark");
      document.body.style.backgroundColor="black"
      setmode("light")
      setstyle({
        color:"white",
        backgroundColor:"#6c5222",
        // border:"2px solid yellow",
        
      })
      setstyle2({
        color:"white",
        
      })
    }
    else{
  setmode("dark")
  document.body.style.backgroundColor="white";
  setstyle({
    color:"black",
    backgroundColor:"white",
    // border:"2px solid yellow",
  })
  setstyle2({
    color:"black",
  })
}
  }
  
  const [mode,setmode]=useState("dark");
  
  const [style,setstyle]=useState(
    {
      color:"black",
      backgroundColor:"white",
      
    }
    )
  const [style2,setstyle2]=useState(
    {
      color:"black",
     
    }
    )
  
  return (

<>
<Router>
<Navbar title="textutils" About="About textutils" mode={mode} modechange={modechange}/>
<div className="container">
<Switch>
          <Route exact path="/" >
<TextForm heading="Enter your text to analys" style={style} style2={style2} />    
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
        </Switch>
</div>
</Router>
</>
  );
}

export default App;
