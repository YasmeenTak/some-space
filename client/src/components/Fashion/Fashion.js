import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

class Fashion extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    console.log(this.props);
    this.getProducts();
  }
  state = {
    products: [],
  };

  handleClick(id) {
    // e.preventDefault();
    console.log(id, "The link was clicked.");
    // console.log(e, "The link was clicked222.");
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
                    <Card.Text>{element.price}</Card.Text>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>{element.description}</Card.Text>
                    <Card.Text>{element.location}</Card.Text>
                    <Card.Text>id:{element._id}</Card.Text>
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
