import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Book from "./Pages/Book";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path={`/book/:bookSlug`}>
            <Book />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
