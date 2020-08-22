import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import logo from './249.png';
// import HomePage from '../HomePage/HomePage';
// import { extend } from 'jquery';
class Navbar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
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
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link
            to="/"
            className="brand-logo"
            style={{ fontStyle: "italic" }}
          >
            <img
              src={logo}
              alt="MyImage"
              className="logo-img"
              style={{ width: "140px", display: "block", marginTop: "-15px" }}
            />
          </Link>

          {!this.state.isloggedin ? <SignedOutLinks /> : <SignedInLinks />}
        </div>
      </nav>
    );
  }
}
export default Navbar;

