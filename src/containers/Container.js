import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./Home";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

const routes = [
  { path: "/", name: "Home", element: Home },
  { path: "/first", name: "First", element: First },
  { path: "/second", name: "Second", element: Second },
  { path: "/third", name: "Third", element: Third },
];

function Container() {
  return (
    <div className="main-container">
      <>
        <div className="nav-bar">
          <div className="mx-auto">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                // as={NavLink}
                to={route.path}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " activated" : "")
                }
                exact="true"
              >
                {route.name}
              </NavLink>
            ))}
          </div>
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

                <Route path="/" element={<Home />} />
                <Route path="/first" element={<First />} />
                <Route path="/second" element={<Second />} />
                <Route path="/third" element={<Third />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </>
    </div>
  );
}

export default Container;
