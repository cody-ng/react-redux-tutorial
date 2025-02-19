import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./react-tutorial/homePage";
import { Header, AboutPage, PageNotFound } from "./components/common";
import { HomePage as MyReduxHomePage } from "./my-redux-example/components";
import { HomePage as HooksHomePage } from "./hooks-example/components";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee, faSpinner);

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/my-redux" component={MyReduxHomePage} />
        <Route path="/my-hooks" component={HooksHomePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
