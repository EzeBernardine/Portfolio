import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "../pages/landing";
import Resume from "../pages/resume";
import Blog from "../pages/blog";

const NotFound = () => <h1>Oops not found..</h1>;

const Router = () => (
  <BrowserRouter>
    <div className="AppRoute">
      <Switch>
        <Route path="/" component={Landing} exact={true} />
        <Route path="/resume" component={Resume} exact={true} />
        <Route path="/blog" component={Blog} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default Router;
