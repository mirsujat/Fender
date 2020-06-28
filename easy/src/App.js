import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Simple from "./components/Forms/Simple";
import Basic from "./components/Forms/Basic";
import Custom from "./components/Forms/Custom";
import Advance from "./components/Forms/Advance";
import Wrapper from "./components/Wrapper/Wrapper";
import Layout from "./components/Layout/Layout";
import ProductPreview from "./components/ProductPreview/ProductPreview";

import "./App.css";

function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar></Navbar>
        <Layout>
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
            <Route path="/spring">
              <ProductPreview></ProductPreview>
            </Route>
          </Switch>
        </Layout>
      </Wrapper>
    </Router>
  );
}

export default App;
