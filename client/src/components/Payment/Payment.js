import React, { Component } from "react";
import HomePage from "./HomePage";
// import logo from "./logo.svg";
import Checkout from "./Checkout";
//import "./App.css";
// Stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51H9W3uJoAFGhJTyjeNruK4RjpJpMoA5DbpHzjRTS7N4OZpV4bdYD2GD3ofND63stAcXPzi3T0wQ3REL9uHu4MmX600wFucyu6Q"
);

class Payment extends Component {
  render() {
    return (
      <div className="App">
        <Elements stripe={stripePromise}>
          <HomePage />
        </Elements>
      </div>
    );
  }
}

export default Payment;
