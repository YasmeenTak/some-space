import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSearchBox from "react-search-box";
import ShopNow from "../ShopNowButton/ShopNowButton";
// import searchByTitle from "../searchByTitle/searchByTitle";

class Machine extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.getProducts();
  }
  state = {
    products: [],
  };
  handleClick(id) {
    console.log(id, "The button was clicked.");
  }
  
  async getProducts() {
    await axios
      .post("/category", { category: 3 })
      .then((result) => {
        console.log(result);
        const finalData = result.data;

        console.log("=====>>>>////???>>>", finalData);
        this.setState({ products: finalData });
      })
      .catch((err) => {
        console.log("it is an error in Machine compoments", err);
      });
  }
  render() {
    console.log(this.state);

    const products = this.state.products ? this.state.products : [];
    return (
      <div>
      
        {/* <ReactSearchBox
          placeholder="Search for products"
          products={products}
          onSelect={(record) => console.log(record)}
          onFocus={() => {
            console.log("This function is called when is focussed");
          }}
          onChange={(value) => console.log(value)}
          fuseConfigs={{
            threshold: 0.05,
          }}
          value="cookie"
        /> */}
        <ul>
          {products.map((element, index) => {
            return (
              <div>
                {/* <ShopNow/>
                <searchByTitle/> */}
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant='top' src={element.images} />
                  <Card.Body>
                    <Card.Title>Product:{element.title}</Card.Title>
                    <Card.Text>Price: $ {element.price}</Card.Text>
                    <Card.Text>Quality: {element.quality}</Card.Text>
                    <Card.Text>Description: {element.description}</Card.Text>
                    <Card.Text>Location: {element.location}</Card.Text>
                    <Link to='/Payment' className='brand-logo'>
                      <Button variant='primary'>buy</Button>
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
export default Machine;
