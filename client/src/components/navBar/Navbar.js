import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
// import ContactUs from './ContactUs/contactUs';

const Navbar = () => {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/Home' className='brand-logo'>
          Some Space
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
        {/* <ContactUs /> */}
      </div>
    </nav>
  );
};

export default Navbar;
