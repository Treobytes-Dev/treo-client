import React from "react";
import { NavLink } from "react-router-dom";

function Navigation({ routes }) {
  return (
    <div className="navigation">
      {routes.map((route) => (
        <NavLink
          key={route.path}
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
  );
}

export default Navigation;
