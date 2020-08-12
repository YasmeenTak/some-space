import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

// const token = localStorage.getItem('token');

const Navbar = () => {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/Home' className='brand-logo'>
          Some Space
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
        {/* {token ? <SignedInLinks /> : <SignedOutLinks />} */}
      </div>
    </nav>
  );
};
export default Navbar;
