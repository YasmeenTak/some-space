import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import $ from 'jquery';
import jwt_decode from 'jwt-decode';
import { createBrowserHistory } from 'history';
import { set } from 'mongoose';
const SignedInLinks = () => {
  const token = localStorage.getItem('token');
  console.log(token);
  const decoded = jwt_decode(token);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  useEffect(() => {
    setFirstName(decoded.firstName);
    setLastName(decoded.lastName);
  }, []);
  // console.log(firstName, lastName, 'hereeeeeeeeeeeeeeeeeeeeeeee');
  return (
    <div>
      <ul className='right'>
        <li className='Name' style={{ fontWeight: 'bold' }}>
          Welcome {firstName}
        </li>
        <li>
          <Link to='/Add' className='btn btn-floating pink lighten-1'>
            <i class='material-icons'>add</i>
          </Link>
        </li>
        <li>
          <Link to='/ShowMyAds' className='btn btn-floating pink lighten-1'>
            <i class='material-icons'>remove_red_eye</i>
          </Link>
        </li>
        <li>
          <Link to='/Cart' className='btn btn-floating pink lighten-1'>
            <i class='material-icons'>add_shopping_cart</i>
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              const history = createBrowserHistory();
              localStorage.removeItem('token');
              history.push('/Home');
              window.location.reload();
            }}
            type='button'
            class='btn btn-danger'
            style={{ backgroundColor: '#ec407a' }}
          >
            Log Out
          </button>
          {/* <Link to='/LogOut'>Log Out</Link> */}
        </li>
      </ul>
    </div>
  );
};
export default SignedInLinks;