// import React, { Component } from "react";
// import CartContainer from "./CartContainer";
// import { createStore } from "redux";
// import reducer from "./reducer";
// import { Provider } from "react-redux";
// import "./style.css";

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// function Cart() {
//   // cart setup

//   return (
//     <Provider store={store}>
//       <CartContainer />
//     </Provider>
//   );
// }

// export default Cart;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import chairs from "./chairs.jpg";
import axios from "axios";
// import "./style.css";
import jwt_decode from "jwt-decode";
import moment from "moment";
//import { Card } from '@material-ui/core';
class Cart extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    Products: [],
    productID: "",
  };

  componentDidMount() {
    const token = localStorage.token;
    var decode = jwt_decode(token);
    var object = { token: token };
    axios
      .post("/showMyCarts", object)
      .then((response) => {
        console.log(response);
        this.setState({ Products: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleSubmit(e) {
    if (localStorage.token) {
      window.location.href = "/Payment";
    } else {
      window.location.href = "/Register";
      // this.props.history.push("/Login");
    }
  }
  //-----------------------------Remove product from list of Ads-----------------------------
  handleRemove = (e, productID) => {
    e.preventDefault();
    const token = localStorage.token;
    var decode = jwt_decode(token);
    axios
      .delete("/remove-one", {
        data: {
          UserID: decode.UserID,
          productID: productID,
        },
      })
      .then((res) => {
        //window.location.reload();
        //console.log(res);
      })
      .catch((err) => {
        console.log("Error", err);
      });
    window.location.reload();
  };

  render() {
    const { Products } = this.state;
    console.log(Products, "productssss");
    return (
      <div className="CartMyAds__div">
        <p>to add more product click here</p>
        <Link to="/DisplayAllProducts">
          <button>see our products</button>
        </Link>
        {Products.map((ele, index) => {
          var category = "Furniture";
          if (ele.category === 3) {
            category = "Machine";
          } else if (ele.category === 1) {
            category = "Fashion";
          }
          return (
            <Container className="containerDiv">
              <Card className="CartMyAds__Card">
                <div className="imgProduct__div">
                  <img
                    className="img-fluid"
                    alt="product img"
                    src={ele.images}
                  ></img>
                </div>
                <div className="details__div">
                  <p>Title: {ele.title}</p>
                  <p>Description: {ele.description}</p>
                  <p>Price: {ele.price}</p>
                  <p>Category: {ele.category}</p>
                  <p>Quality: {ele.quality}</p>
                  <p>Location: {ele.location}</p>
                  <p>Date: {moment(ele.dateOfAdd.date).format("DD-MM-YYYY")}</p>
                </div>
                <div className="Btn">
                  {/* <Button className="Edit_Btn" onClick={this.updateItem}>
                    Edit
                  </Button> */}

                  <Button
                    class="ui small pink button"
                    variant="primary"
                    style={{
                      marginLeft: "40px",
                      margin: "30px",
                      backgroundColor: "#EC407A",
                    }}
                    value={this.state.products}
                    onClick={() => {
                      this.handleSubmit(ele.productID);
                      //this.handleSubmit(ele._id);
                    }}
                  >
                    {/* buy */}
                    <i class="payment icon"></i>
                  </Button>

                  <Button
                    className="Remove_Btn"
                    onClick={(event) => this.handleRemove(event, ele.productID)}
                  >
                    Remove
                  </Button>
                </div>
              </Card>
            </Container>
          );
        })}
      </div>
    );
  }
}
export default Cart;
