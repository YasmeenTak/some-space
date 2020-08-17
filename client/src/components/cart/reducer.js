
import React, { Component } from "react";
import * as jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";
import axios from "axios";
import cartItems from "./cart-items";

import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from "./action";

const initialStore = {
  cart: cartItems,
  carts: [],
  total: 0,
  amount: 0,
};
// function componentDidMount() {
//   const token = localStorage.token;
//   var decode = jwt_decode(token);
//   //console.log(decode, 'ggggggggggggggggggggggggs');
//   axios
//     .get(`/showMyCarts/${decode.UserID}`)
//     .then((response) => {
//       response.send("cart responseeeeeee")
//       console.log(response,"cart response");
//       this.setState({ Products: response.data });
//       console.log(this.state, "product saved");
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }
// componentDidMount()
function reducer(state = initialStore, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });

    return { ...state, cart: tempCart };
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
          }
          if (action.payload.toggle === "dec") {
            return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
          }
        }
        return cartItem;
      }),
    };
  }
  return state;
}
////////////////////////////////test to get the products that we added to cart
var token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjExMjE1NDQzLCJmaXJzdE5hbWUiOiJEYWxpYSIsImxhc3ROYW1lIjoiRW1hZCIsImlhdCI6MTU5NzU5MDQ1OCwiZXhwIjoxNjI5MTQ3Mzg0fQ.2NUXKdSwrADUxGpmKUUMfSVD6KYrsgFzp5CfboKM2Q0";

// function data() {
//   axios
//     .get(`/showMyCarts/:${token}`)
//     .then((result) => {
//       initialStore.carts = result;
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   // try {
//   //   const result = axios.get(
//   //     `/showMyCarts/:${token}`
//   //   );
//   //   console.log(result, "xxxxx");
//   //   return result.data;
//   //   // console.log(result.data, "cart-front");
//   // } catch (error) {
//   //   console.log(error);
//   // }
// }

// data();
//+++++++++++++++++++
// function data() {
//   axios
//     .get('/showMyCarts/:${token}')
//     .then((result) => {
//       console.log(result);
//       const finalData = result.data;
//       console.log('n cart', finalData);
//       this.setState({ carts: finalData });
//       // console.log("hi eman", finalData);
//     })
//     .catch((err) => {
//       console.log('hi');
//       console.log('it is an error', err);
//     });
// }
// data()

// function data() {
//   try {
//     const result = axios.get("http://localhost:5000/showMyCarts", {
//       token:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjExMjE1NDQzLCJmaXJzdE5hbWUiOiJEYWxpYSIsImxhc3ROYW1lIjoiRW1hZCIsImlhdCI6MTU5NzU5MDQ1OCwiZXhwIjoxNjI5MTQ3Mzg0fQ.2NUXKdSwrADUxGpmKUUMfSVD6KYrsgFzp5CfboKM2Q0",
//     });
//     console.log(result, "xxxxx");
//     return result.data;
//     // console.log(result.data, "cart-front");
//   } catch (error) {
//     console.log(error);
//   }
// }
// data();
// function data() {
//   axios
//     .get("/http://localhost:5000/showMyAds", {
//       token:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjg1ODEyMDkyLCJmaXJzdE5hbWUiOiJZYXNtZWVuIiwibGFzdE5hbWUiOiJBYnUgS3dhaWsiLCJpYXQiOjE1OTcyNDc0ODUsImV4cCI6MTYyODgwNDQxMX0.2bi6mlssGgpxuAMVg7O4Q5PrAo2l4xJnsZkeN5xy3No",
//     })
//     .then((result) => {
//       console.log(result);
//       const finalData = result.data;

//       console.log("finalEamn", finalData);
//       this.setState({ products: finalData });
//       // console.log("hi eman", finalData);
//     })
//     .catch((err) => {

//       console.log("it is an error in the front of carty", err);
//     });
// }

export default reducer;

// switch (action.type) {
//   case CLEAR_CART:
//     return { ...state, cart: [] };
//   default:
//     return state;
// }

// class ShowCart extends Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {
//     Products: [],
//   };
//   // get all product user added for sell
//   componentDidMount() {
//     const token = localStorage.token;
//     var decode = jwt_decode(
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjg1ODEyMDkyLCJmaXJzdE5hbWUiOiJZYXNtZWVuIiwibGFzdE5hbWUiOiJBYnUgS3dhaWsiLCJpYXQiOjE1OTcyNDc0ODUsImV4cCI6MTYyODgwNDQxMX0.2bi6mlssGgpxuAMVg7O4Q5PrAo2l4xJnsZkeN5xy3No"
//     );
//     //console.log(decode, 'ggggggggggggggggggggggggs');
//     axios
//       .get(`/buyProduct/${decode.UserID}`)
//       .then((response) => {
//         //console.log(response);
//         this.setState({ Products: response.data });
//         console.log(this.state, "product saved in Cart");
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// }

export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch("/showMyCarts")
      .then(handleErrors)
      .then(res => res.json())
    
      .then(json => {
        dispatch(fetchProductsSuccess(json.products));
        return json.products;
        //console.log(json.products)
      })
      
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}