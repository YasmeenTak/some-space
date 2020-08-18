import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
// import HomePage from '../HomePage/HomePage';
import { extend } from "jquery";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isloggedin: false,
  };
  checkLoggedin() {
    const token = localStorage.getItem("token");
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
    console.log("state is it logged" + this.state.isloggedin);
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link
            to="/Home"
            className="brand-logo"
            style={{ fontStyle: "italic" }}
          >
            Some Space
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
