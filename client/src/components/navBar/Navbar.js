<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
=======
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
>>>>>>> f86808a73352ba7b4706506a78350436750f9e12

const Navbar = () => {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/Home' className='brand-logo'>
          Some Space
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
