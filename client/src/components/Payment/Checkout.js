import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

// import STRIPE_PUBLISHABLE from "./constants/stripe";
// import PAYMENT_SERVER_URL from "./constants/server";

// const CURRENCY = "USD";

const fromDollarToCent = (amount) => parseInt(amount * 100);

const successPayment = (data) => {
  alert("Payment Successful");
};

const errorPayment = (data) => {
  alert("Payment Error");
};

const onToken = (amount, description) => (token) =>
  axios
    .post("/paymentStripe", {
      description,
      source: token.id,
    //   currency: CURRENCY,
    //   amount: fromEuroToCent(amount),
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)} 
    // token={onToken(amount, description)}
    // currency={CURRENCY}
    stripeKey={
      "pk_test_51H9W3uJoAFGhJTyjeNruK4RjpJpMoA5DbpHzjRTS7N4OZpV4bdYD2GD3ofND63stAcXPzi3T0wQ3REL9uHu4MmX600wFucyu6Q"
    }
    zipCode
    email
    allowRememberMe
  />
);

export default Checkout;
