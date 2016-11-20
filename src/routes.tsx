import * as React from "react";
import { Route } from "react-router";
// Import containers
import App from "./components/app";
import AboutCo from "./components/aboutCo";
import WritingForm from "./components/writingForm";
import PostShow from "./components/postShow";

const routeMap = (
  <Route path="/" component={App}>
    <Route path="emologic" component={AboutCo} />
    <Route path="posts">
      <Route path="new" component={WritingForm} />
      <Route path=":postId" component={PostShow} />
    </Route>
  </Route>
);

export default routeMap;
