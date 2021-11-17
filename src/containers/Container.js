import React from "react";

import { Routes, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./Home";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

function Container({ location }) {
  return (
    <div className='container'>
      {/* <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        > */}
          <section className="route-section">
            <Routes location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/first" component={First} />
              <Route path="/second" component={Second} />
              <Route path="/third" component={Third} />
            </Routes>
          </section>
        {/* </CSSTransition>
      </TransitionGroup> */}
    </div >
  );
}

export default Container;
