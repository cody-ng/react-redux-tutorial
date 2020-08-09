import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./tutorial/homePage";
import Header from "./components/common/header";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
