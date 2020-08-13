import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./tutorial/homePage";
import { Header, AboutPage, PageNotFound } from "./components/common";
import { HomePage as MyReduxHomePage } from "./components/my-redux";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/my-redux" component={MyReduxHomePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
