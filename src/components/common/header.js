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
        My Redux
      </NavLink>
    </nav>
  );
};

export default Header;
