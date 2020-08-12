import React, { Component } from "react";
import HomePage from "./HomePage";
// import logo from "./logo.svg";

//import "./App.css";
// Stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51H9W3uJoAFGhJTyjz95tejiSIOQVDTjkfgy0fsaHwWEiaPNvAtgAzhV4bLBHOUApfpqeskPk8UVB34J8n3qBh97p00FAjhnLeu"
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
