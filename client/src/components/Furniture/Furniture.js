import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import jwt_decode from "jwt-decode";
import 'semantic-ui-css/semantic.min.css'
//import SearchFeature from "../SearchFeature/SearchFeature";

class Furniture extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.getProducts();
    // this.getProducts = this.getProducts.bind(this);
  }
  state = {
    products: [],
  };

  handleSubmit(e) {
    console.log(e);
    if (localStorage.token) {
      axios
        .post("/removeOneFromCarts", { productID: e })
        .then((result) => {
          console.log("delete it from product");
          window.location.href = "/Payment";
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      window.location.href = "/Register";
      // this.props.history.push("/Login");
    }
  }

  handleClick(id) {
    if (localStorage.token) {
      const token = localStorage.token;
      var decode = jwt_decode(token);
      console.log(decode.UserID, "Hi this is inside ");
      axios
        .post("/addToCardUser", { productID: id, UserID: decode.UserID })
        .then((result) => {
          console.log("this is in card in ", result);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      window.location.href = "/Register";
      // this.props.history.push("/Login");
    }
  }
  async getProducts(value) {
    console.log(value);
    if (value !== undefined || value === "") {
      var newProduct = [];
      for (var i = 0; i < this.state.products.length; i++) {
        if (this.state.products[i].title === value) {
          newProduct.push(this.state.products[i]);
        }
      }
      this.setState({ products: newProduct });
      console.log(this.state.products, "qqqqqqqqq");
    } else {
      await axios
        .post("/category", { category: 2 })
        .then((result) => {
          console.log(result);
          const finalData = result.data;
          //console.log("=====>>>>////???>>>", finalData);
          this.setState({ products: finalData });
          console.log(this.state.products, "cccccc");
        })
        .catch((err) => {
          console.log("it is an error in Furniture compoments", err);
        });
    }
  }
  render() {
    // console.log(this.state);

    const products = this.state.products ? this.state.products : [];
    return (
      <div>
        <Link to="/Home">
        <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            style={{ color: 'hotPink', fontSize: '40' }}
          />
          <i class='fas fa-angle-double-left'></i>
          

        </Link>
        {/* <SearchFeature getProducts={this.getProducts} /> */}

        <ul>
          {products.map((element, index) => {

            var quality = 'very good';
            if (element.quality === "3") {
              quality = 'good';
            } else if (element.quality === "1") {
              quality = 'Exellent';
            }
            return (
              <row>
                <Card style={{ width: "22rem" }}>
                  <Card.Img variant="top" src={element.images} />
                  <Card.Body style={{color:'#333d82'}}>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>Price: $ {element.price}</Card.Text>
                    <Card.Text>Quality: {quality}</Card.Text>
                    <Card.Text>Description: {element.description}</Card.Text>
                    <Card.Text>Location: {element.location}</Card.Text>

                    {/* <Link to="/Payment" className="brand-logo"> */}
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
                        this.handleSubmit(element._id);
                      }}
                    >
                      <i class="payment icon"></i>

                      {/* buy */}
                    </Button>
                    {/* <button class="ui small green button">
                      <i class="download icon"></i>

</button> */}
                    {/* </Link> */}

                    <Button
                      class="ui small pink button"
                      style={{ backgroundColor: "#EC407A" }}
                      variant="primary"
                      value={this.state.products}
                      onClick={() => {
                        this.handleClick(element._id);
                      }}
                    >
                      <i class="cart icon"></i>
                      {/* To Cart */}
                    </Button>
                  </Card.Body>
                </Card>
              </row>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Furniture;
