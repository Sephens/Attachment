import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/" activeclassName="is-active" exact={true}>
        Users
      </NavLink>
      <NavLink to="/createuser" activeclassName="is-active">
        Create User
      </NavLink>
    </div>
  );
};

export default Header;