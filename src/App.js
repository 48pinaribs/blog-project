import React,{Component} from "react";
import Offer from "./components/Offer";
import Order from "./components/Order";
import './App.css';
import { BrowserRouter as Router , Route , Switch } from "react-router-dom/cjs/react-router-dom.min";

import Buttons from "./components/Buttons";

//import logo from "./images/logo.png";
//<img src={logo} alt="logo"/>


class App extends Component{
  render() {
    return (
     
     <Router>
     <div className="App">
      
    <h1 style={{color: "Blue", height:100}}>
      ÖZYER GROUP
    </h1>
      
    
  
    <div style={{display:"flex", flexDirection:"row" }}>
     <Switch>
        <Route exact path="/">
            <Buttons/>
        </Route>
        <Route path="/offers">
            <Offer/>
        </Route>
        <Route path="/orders">
            <Order/>
        </Route>

    </Switch>
    

    </div>
     </div>
   </Router>

    );
  }
}
  export default App;
  
  
