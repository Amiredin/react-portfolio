import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <Switch>
          <div className="main-app">
            <Route path="/" exact>
              <Main />
            </Route>

            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
