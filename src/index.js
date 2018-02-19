import React, { Component } from "react";
import ReactDOM from "react-dom";
import hoc from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import home from "./Home";
const a = hoc();

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={home} />
        <Route path="/:componente" component={a} />
    </Switch>
  </BrowserRouter>,
 document.getElementById("root")
);
registerServiceWorker();
