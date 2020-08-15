import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import $ from 'jquery';
import { createBrowserHistory } from 'history';

const SignedInLinks = () => {
  return (
    <div>
      <ul className='right'>
        <li>
          <button
            onClick={() => {
              const history = createBrowserHistory();
              localStorage.removeItem('token');
              history.push('/Home');
              window.location.reload();
            }}
            type="button" class="btn btn-danger"
          >
            Log Out
          </button>
          {/* <Link to='/LogOut'>Log Out</Link> */}
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
      </ul>
    </div>
  );
};
export default SignedInLinks;