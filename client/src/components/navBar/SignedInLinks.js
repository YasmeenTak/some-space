import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-dropdown";
import $ from "jquery";

const SignedInLinks = () => {
  return (
    <div>
      <ul id="dropdown1" class="dropdown-content">
        <li>
          <a href="#!">add</a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="#!">show</a>
        </li>
      </ul>

      <div>
        <ul className="right">
          <li>
            <NavLink to="/">Log Out</NavLink>
          </li>
          <li>
            <a class="dropdown-trigger" href="#!" data-target="dropdown1">
              Advertisement<i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
          <li>
            <NavLink to="/" className="btn btn-floating pink lighten-1">
              <i class="material-icons">add_shopping_cart</i>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SignedInLinks;
