import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";


const Navbar = () => (<div>
  <Link to="/">Home</Link> 
  <Link to="/About">About</Link> 
  <Link to="/Documentation">Documentation</Link>
</div>);

export default Navbar