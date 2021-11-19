import React from "react";
import { Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Navigation from "./Navigation";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./cms/About"));
const Donate = React.lazy(() => import("./cms/Donate"));
const Educators = React.lazy(() => import("./cms/Educators"));
const Facilitators = React.lazy(() => import("./cms/Facilitators"));
const Parents = React.lazy(() => import("./cms/Parents"));
const Programs = React.lazy(() => import("./cms/Programs"));
const Store = React.lazy(() => import("./cms/Store"));
const Training = React.lazy(() => import("./cms/Training"));

const routes = [
  { path: "/", name: "Home", element: Home },
  { path: "/programs", name: "Programs", element: Programs },
  { path: "/parents", name: "Parents", element: Parents },
  { path: "/educators", name: "Educators", element: Educators },
  { path: "/training", name: "Training", element: Training },
  { path: "/facilitators", name: "Facilitators", element: Facilitators },
  { path: "/about", name: "About", element: About },
  { path: "/store", name: "Store", element: Store },
  { path: "/donate", name: "Donate", element: Donate },
];

function RouterContainer() {
  return (
    <div className="main-container">
      <>
        <div className="nav-bar">
          <Navigation routes={routes} />
        </div>
        <div className="container">
          <TransitionGroup>
            <CSSTransition timeout={300} classNames="page" unmountOnExit>
              <Routes>
                {/* {routes.map(({ path, Component }) => (
              <Route key={path} exact="true" path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))} */}
                {/* 
              {routes.map((route) => (
                <Route
                  key={route.path}
                  exact="true"
                  path={route.path}
                  element={route.element}
                />
              ))} */}

                <Route
                  path="/"
                  element={
                    <React.Suspense fallback={<>...Loading...</>}>
                      <Home />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/programs"
                  element={
                    <React.Suspense fallback={<>...Loading...</>}>
                      <Programs />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <React.Suspense fallback={<>...Loading...</>}>
                      <About />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/donate"
                  element={
                    <React.Suspense fallback={<>...Loading...</>}>
                      <Donate />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/educators"
                  element={
                    <React.Suspense fallback={<>...Loading...</>}>
                      <Educators />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/facilitators"
                  element={
                    <React.Suspense
                      fallback={
                        <>
                          <Facilitators />
                        </>
                      }
                    ></React.Suspense>
                  }
                />
                <Route
                  path="/parents"
                  element={
                    <React.Suspense fallback={<>...Loading...</>}>
                      <Parents />
                    </React.Suspense>
                  }
                />

                <Route
                  path="/store"
                  element={
                    <React.Suspense fallback={<>...Loading...</>}>
                      <Store />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/training"
                  element={
                    <React.Suspense fallback={<>...Loading...</>}>
                      <Training />
                    </React.Suspense>
                  }
                />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </>
    </div>
  );
}

export default RouterContainer;
