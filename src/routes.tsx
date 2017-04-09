import * as React from "react";
import { Route, IndexRoute } from "react-router";
// Import containers
import App from "./components/app";
import Home from "./components/home";
import AboutCo from "./components/aboutCo";
import WritingForm from "./components/writingForm";
import PostList from "./components/postList";
import PostShow from "./components/postShow";

const routeMap = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="tylorshin" component={AboutCo} />
    <Route path="posts">
      <IndexRoute component={PostList} />
      <Route path="new" component={WritingForm} />
      <Route path=":postId" component={PostShow} />
    </Route>
  </Route>
);

export default routeMap;
