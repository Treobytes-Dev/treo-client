import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import Header from "./containers/Header";
import Container from "./containers/Container";
// const HomeLazy = lazy(() => import('./components/Home'));
// const DemoOneLazy = lazy(() => import("./containers/DemoOne"));

function App() {
  return (
    <div className="App">
      <h2>Container App</h2>
      <Router>
        <>
          <Header />
          <Container />
        </>
      </Router>
    </div>
  );
}

export default App;
