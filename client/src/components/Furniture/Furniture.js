import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Furniture extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.getProducts();
  }
  state = {
    products: [],
  };
  // to get all data
  async getProducts() {
    await axios
      .get("/addProduct/:category")
      .then((result) => {
        console.log(result);
        const finalData = result.data;

        console.log("=====", finalData);
        this.setState({ products: finalData });
        // console.log("hi eman", finalData);
      })
      .catch((err) => {
        console.log("hi");
        console.log("it is an error", err);
      });
  }

  render() {
    console.log(this.state);

    const products = this.state.products ? this.state.products : [];
    return (
      <div>
        <ul>
          {products.map((element, index) => {
            return (
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={element.images} />
                  <Card.Body>
                    <Card.Text>{element.price}</Card.Text>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>{element.description}</Card.Text>
                    <Card.Text>{element.location}</Card.Text>
                    <Link to="/Payment" className="brand-logo">
                      <Button variant="primary">buy</Button>
                    </Link>
                    <br />
                    <br />
                    <Button variant="primary">To Cart</Button>
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
export default Furniture;
