import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>hello...</h1>
      {/* Header */}
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1> Chat here</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>

        {/* Tinder Cards */}
        {/* Buttons below cards */}

        {/* Chat Screen */}
        {/* Individual chat Screen */}
      </Router>
    </div>
  );
}

export default App;
