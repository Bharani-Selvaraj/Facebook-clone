import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./LoginPage/LoginPage";
import HeaderArea from "./HeaderArea/HeaderArea";
function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <Router>
        <Switch>
          <Route exact={true} path="/LoginPage" component={LoginPage} />
          <Route path="/HeaderArea" component={HeaderArea} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
