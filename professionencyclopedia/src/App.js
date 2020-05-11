import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Job from "./Pages/Job";
import Skill from "./Pages/Skill";

const App = () => {
  const six = "6"; // this is a place holder;
  const [currentJob, setCurrentJob] = useState(null);

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path={`/jobs/:jobID`}>
            <Job />
          </Route>
          <Route path={`/skills/:jobID`}>
            <Skill />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
