import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

class Fashion extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
    this.getProducts();
  }
  state = {
    products: [],
  };

  handleClick(id) {
    if (localStorage.token) {
      const token = localStorage.token;
      var decode = jwt_decode(token);
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
  async getProducts() {
    await axios
      .post("/category", { category: 1 })
      .then((result) => {
        console.log(result);
        const finalData = result.data;

        console.log("=====>>>>////???>>>", finalData);
        this.setState({ products: finalData });
      })
      .catch((err) => {
        console.log("it is an error in fashion compoments", err);
      });
  }
  render() {
    const products = this.state.products ? this.state.products : [];
    return (
      <div>
        <ul>
          {products.map((element, index) => {
            console.log(element.id, "idEman");
            return (
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={element.images} />
                  <Card.Body>
                    <Card.Title>Product:{element.title}</Card.Title>
                    <Card.Text>Price: $ {element.price}</Card.Text>
                    <Card.Text>Quality: {element.quality}</Card.Text>
                    <Card.Text>Description: {element.description}</Card.Text>
                    <Card.Text>Location: {element.location}</Card.Text>
                    <Link to="/Payment" className="brand-logo">
                      <Button variant="primary">buy</Button>
                    </Link>
                    <br />
                    <br />
                    <Button
                      variant="primary"
                      value={this.state.products}
                      onClick={() => {
                        this.handleClick(element._id);
                      }}
                    >
                      To Cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Fashion;
