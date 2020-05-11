import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";


import Home from "./Pages/Home"
import About from "./Pages/About"
import Documentation from "./Pages/Documentation"
import Navbar from "./Components/Navbar"


const App= ()=> {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <div><Route exact path="/"><Home /></Route></div>
          <div><Route path="/About"><About /></Route></div>
          <div><Route path="/Documentation"><Documentation /></Route></div>          
        </Switch>
      </div>
    </Router>

  );
}

export default App;
