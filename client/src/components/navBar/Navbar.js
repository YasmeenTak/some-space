import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  // componentDidMount(){
  //   const token =  localStorage.getItem('token');
  //   console.log(token);
  //   const decoded = jwt_decode(token);
  //   this.setState({
  //     firstName: decoded.firstName,
  //     lastName: decoded.lastName,
  //   })
  // }
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
