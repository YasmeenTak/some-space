import React from "react";
import { Link, NavLink } from "react-router-dom";
const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </div>
  );
};
export default SignedOutLinks;
