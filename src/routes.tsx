import * as React from "react";
import { Route } from "react-router";
// Import containers
import App from "./components/app";
import AboutCo from "./components/aboutCo";

const routeMap = (
  <Route path="/" component={App}>
    <Route path="emologic" component={AboutCo} />
  </Route>
);

export default routeMap;
