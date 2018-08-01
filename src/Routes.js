import React, { Component } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Loadable from "react-loadable";

const Base64Page = Loadable({
  loader: () => import("./pages/Base64Page"),
  loading() {
    return <div>Loading...</div>;
  }
});

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Base64Page} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes;
