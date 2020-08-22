import React, { Component } from "react";
import { BrowserRouter as  Redirect } from "react-router-dom";
class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("token");
    //localStorage.clear();
  }
  render() {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }
}
export default Logout;
