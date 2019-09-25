import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login.js";
import AppliedRoute from "./components/AppliedRoutes.js";
import Signup from "./containers/Signup";
import Properties from "./containers/Properties"
import Clients from "./containers/Clients"
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";


export default ({ childProps }) =>
  <Switch>
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
    <AuthenticatedRoute path="/clients" exact component={Clients} props={childProps} />
    <AuthenticatedRoute path="/" exact component={Properties} props={childProps} />
    <AuthenticatedRoute path="/properties" exact component={Properties} props={childProps} />
    

    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;

