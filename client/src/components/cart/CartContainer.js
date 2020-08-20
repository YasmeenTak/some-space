import React from "react";
import CartItem from "./cartItems";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "./action";

/////////////////////////////////////////
import axios from "axios";
// const data = async () => {
//   const result = await axios
//     .get("http://localhost:5000/showMyAds", {
//       token:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjc1MzA5MDgzLCJmaXJzdE5hbWUiOiJFbWFuIiwibGFzdE5hbWUiOiJBYnUgV2FrZWQiLCJpYXQiOjE1OTczMTg2NDQsImV4cCI6MTYyODg3NTU3MH0.H2gvJRGlAKf5VfYtJHzU4rmFLg4cYdJybAacFQLz-Zk",
//     })
//     .then((resp) => {
//       return resp;
//     })
//     .catch((err) => {
//       return err;
//     });
// };

///////////////////////////////////

const CartContainer = ({ cart = [], total, dispatch }) => {
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);
 // console.log(data());
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
          
          
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          clear cart
        </button>
        <br />
        <button
          className="btn clear-btn"
          // onClick={() => dispatch({ type: CLEAR_CART })}
        >
          pay
        </button>
      </footer>
    </section>
  );
};

function mapStateToProps(store) {
  const { cart, total } = store;
  return { cart, total };
}
export default connect(mapStateToProps)(CartContainer);
