import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import { RouterContainer } from "./containers/RouterContainer";

function App() {
  return (
    <div className="app">
      <h2>Treobytes</h2>
      <Router>
        <RouterContainer />
      </Router>
    </div>
  );
}

export default App;
