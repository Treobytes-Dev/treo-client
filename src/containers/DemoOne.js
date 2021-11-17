import React from "react";
import { Link, Route, Routes} from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import { string } from "prop-types";

const Home = () => (
  <div className="comp">
    <h2>Home</h2>
    <p>Is where I live</p>
  </div>
);

const About = () => (
  <div className="comp">
    <h2>About</h2>
    <p>Is what I am</p>
  </div>
);

export const DemoOne = () => {
  return (
    <div className="demo-one" data-test-id="demo-one">
      <Route
        render={({ location }) => (
          <div>
            <div className="button">
              <Link to="/one">menu one</Link>
            </div>
            <div className="button">
              <Link to="/two">menu two</Link>
            </div>
            <TransitionGroup
              transitionName="example"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              <Routes key={location.pathname} location={location}>
                <Route path="/one" render={Home} />
              </Routes>
            </TransitionGroup>

            <div></div>
            <TransitionGroup
              transitionName="example"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              <Routes key={location.pathname} location={location}>
                <Route path="/two" render={About} />
              </Routes>
            </TransitionGroup>
          </div>
        )}
      />
    </div>
  );
};

DemoOne.propTypes = {
  /**
   * Define image alt attribute
   */
  altTag: string,
};
