import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import chairs from "./chairs.jpg";
import axios from "axios";
import "./style.css";
import jwt_decode from "jwt-decode";
import moment from "moment";
//import { Card } from '@material-ui/core';
class Show extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    Products: [],
    productID: "",
  };
  //-------------------------------Get all product user added for sell--------------------------
  componentDidMount() {
    const token = localStorage.token;
    var decode = jwt_decode(token);
    //console.log(decode, 'ggggggs');
    axios
      .get(`/findProduct/${decode.UserID}`)
      .then((response) => {
        //console.log(response);
        //console.log(response.data, 'daataaaa');
        this.setState({ Products: response.data });
        //console.log(this.state, 'product saved');
      })
      .catch(function (error) {
        console.log(error);
      });
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
  //---------------------------------Edit product from list of Ads------------------------------------
  // updateItem = (e, productID) => {
  //   e.preventDefault();
  //   const token = localStorage.token;
  //   var decode = jwt_decode(token);
  //   id = decode.productID;
  //   axios
  //     .put('/updateOne/id', {
  //       images: 'asfd',
  //       title: 'Yassssssmeen',
  //       description: 'Yasmeen',
  //       price: 555,
  //       location: 'Gaza',
  //       category: 1,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };
  //----------------------------------------------------------------------------------------
  render() {
    const { Products } = this.state;
    console.log(Products, "productssss");
    return (
      <div className="ShowMyAds__div">
        <h> click here to add your products</h>
        <Link to="/Add">
          <button>Add</button>
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
              <Card className="ShowMyAds__Card">
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
                  <p>Category: {category}</p>
                  <p>Quality: {ele.quality}</p>
                  <p>Location: {ele.location}</p>
                  <p>Date: {moment(ele.dateOfAdd.date).format("DD-MM-YYYY")}</p>
                </div>
                <div className="Btn">
                  <Button className="Edit_Btn" onClick={this.updateItem}>
                    Edit
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
export default Show;
