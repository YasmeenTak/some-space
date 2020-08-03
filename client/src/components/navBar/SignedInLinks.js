import React from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "react-dropdown";
import $ from "jquery";

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/LogOut">Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/Add" className="btn btn-floating pink lighten-1">
            <i class="material-icons">add</i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Show" className="btn btn-floating pink lighten-1">
            <i class="material-icons">remove_red_eye</i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Cart" className="btn btn-floating pink lighten-1">
            <i class="material-icons">add_shopping_cart</i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
