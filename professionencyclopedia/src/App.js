import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";


import Home from "./Pages/Home";
import Navbar from "./Components/Navbar"

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
</Router>
);


export default App;
