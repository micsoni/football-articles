import React from "react";
import { Route, Switch } from "react-router";
import Homepage from "./pages/Homepage";
import Alert from "./components/ErrorAlert"
import "./App.css";

function App() {
  return (
    <React.Fragment>
       <Alert/>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
