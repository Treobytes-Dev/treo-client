import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DemoOne } from "./containers/DemoOne";
import "./styles/App.css";

// const HomeLazy = lazy(() => import('./components/Home'));
const DemoOneLazy = lazy(() => import("./containers/DemoOne"));

function App() {
  return (
    <div className="App">
      <h2>Container App</h2>
      
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/demo-one" component={DemoOneLazy} />
            <Route exact path="/demo-onev2" component={DemoOne} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
