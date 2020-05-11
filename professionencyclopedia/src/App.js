import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Job from "./Pages/Job";
import Skill from "./Pages/Skill";

const App = () => {
  const lastQueries = JSON.parse(
    window.localStorage.getItem("EncyclopediaOfProfessions")
  ).lastQueries;
  const [recentQueries, setRecentQueries] = useState(lastQueries);

  const updateQueryHistory = (title, id) => {
    if (recentQueries.length >= 5) {
      let choppedList = recentQueries.slice(0,4)
      setRecentQueries([{ job_title: title, job_uuid: id }, ...choppedList]);
    } else { 
      setRecentQueries([{ job_title: title, job_uuid: id }, ...recentQueries]);
    }

  };

  useEffect(() => {
    return () => {
      window.localStorage.setItem(
        "EncyclopediaOfProfessions",
        JSON.stringify({ preferences: {}, lastQueries: recentQueries.slice(0,5) })
      );
    };
  }, [recentQueries]);

  return (
    <Router>
      <div>
        <Navbar
          addToList={(title, id) => {
            updateQueryHistory(title, id);
          }}
        />
        <Switch>
          <Route exact path="/">
            <Home {...{ recentQueries }} />
          </Route>

          <Route path={`/jobs/:jobID`} component={Job}>
          </Route>
          <Route path={`/skills/:skillID`}>
            <Skill />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
