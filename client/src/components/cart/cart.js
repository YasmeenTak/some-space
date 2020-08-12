import React, { Component } from "react";
import CartContainer from "./CartContainer";
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import './style.css';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function Cart() {
  // cart setup

  return (
    <Provider store={store}>
      <CartContainer />
    </Provider>
  );
}

export default Cart;
