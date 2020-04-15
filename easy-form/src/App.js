import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Simple from "./components/Forms/Simple";
import Basic from "./components/Forms/Basic";
import Custom from "./components/Forms/Custom";
import Advance from "./components/Forms/Advance";

import "./App.css";
function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Simple></Simple>
          </Route>
          <Route path="/basic">
            <Basic></Basic>
          </Route>
          <Route path="/custom">
            <Custom></Custom>
          </Route>
          <Route path="/advance">
            <Advance></Advance>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
