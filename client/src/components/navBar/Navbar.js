import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import logo from './249.png';
// import HomePage from '../HomePage/HomePage';
import { extend } from 'jquery';
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isloggedin: false,
  };
  checkLoggedin() {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      this.setState({
        isloggedin: true,
      });
    }
  }
  componentDidMount() {
    this.checkLoggedin();
  }
  render() {
    console.log('state is it logged' + this.state.isloggedin);
    return (
      <nav className='nav-wrapper grey darken-3'>
        <div className='container'>
          <Link
            to='/Home'
            className='brand-logo'
            style={{ fontStyle: 'italic' }}
          >
            <img
              src={logo}
              className='logo-img'
              style={{ width: '140px', display: 'block', marginTop: '-15px' }}
            />

            {/* <Img src={require('./249.png')}></Img> */}
            {/* Some Space */}
          </Link>

          {/* <SignedInLinks />
        <SignedOutLinks /> */}
          {!this.state.isloggedin ? <SignedOutLinks /> : <SignedInLinks />}
        </div>
      </nav>
    );
  }
}
export default Navbar;
// <a href='#' class='navbar-brand'>
{
  /* <img src={logo} width='40' />
</a> */
}
