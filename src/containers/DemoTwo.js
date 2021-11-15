import React from "react";
import { hashHistory, IndexRoute, Link, Route, Router } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";
import { string } from "prop-types";

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <CSSTransitionGroup
        component="div"
        transitionName="animatable"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {cloneElement(props.children, {
          key: props.children.props.location.pathname,
        })}
      </CSSTransitionGroup>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <Link to="/">Logo</Link>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
    </div>
  );
};

const Users = () => {
  return (
    <div className="users">
      <h1>Users</h1>
    </div>
  );
};

const NoMatch = () => {
  return <h1>Not found 404</h1>;
};

export const DemoTwo = () => {
  return (
    <div className="demo-one" data-test-id="demo-one">
      <Router history={hashHistory}>
        <Route path="/demo-two" component={App}>
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
          <Route path="users" component={Users} />
          <Route path="*" component={NoMatch} />
        </Route>
      </Router>
    </div>
  );
};

DemoTwo.propTypes = {
  /**
   * Define image alt attribute
   */
  altTag: string,
};
