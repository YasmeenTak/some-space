import React, { Component } from "react";
// import logo from "./logo.svg";
import Checkout from "./Checkout";
//import "./App.css";

class Payment extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to Your Stripe Account</h2>
        </div>
        <p className="App-intro">
          <Checkout
            name={"Some-Space"}
            description={"You Choose The Best "}
            // amount={4.99}
          />
        </p>
      </div>
    );
  }
}

export default Payment;
