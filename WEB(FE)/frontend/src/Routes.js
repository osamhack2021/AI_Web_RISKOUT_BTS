import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Main from "./pages/index";
import NotFound from "./pages/NotFound";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
