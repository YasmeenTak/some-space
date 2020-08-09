import React, { Component } from "react";
import axios from "axios";

class Furniture extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.getProducts();
  }
  state = {
    products: [],
  };
  async getProducts() {
    await axios
      .get("/addProduct", { category: 2 })
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
              <li>
                {element.title}
                <br />
                {element.description}
                <br />
                {element.price}
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Furniture;
