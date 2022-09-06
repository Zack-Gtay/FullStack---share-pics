import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new">
          <NewPlace />
        </Route>
        <Redirect to="" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
