import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Redux Tutorial
      </NavLink>
      {" | "}
      <NavLink to="/my-redux" activeStyle={activeStyle}>
        My Redux Example
      </NavLink>
      {" | "}
      <NavLink to="/my-hooks" activeStyle={activeStyle}>
        Hooks Example
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
