import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import RouterContainer from "./containers/RouterContainer";

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
