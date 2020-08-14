import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

class Show extends Component {
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
      .post('http://localhost:5000//showMyAds', { category: 2 })
      .then((result) => {
        console.log(result);
        const finalData = result.data;

        console.log('=====>>>>////???>>>', finalData);
        this.setState({ products: finalData });
      })
      .catch((err) => {
        console.log('it is an error in Furniture compoments', err);
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
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant='top' src={element.images} />
                  <Card.Body>
                    <Card.Text>{element.price}</Card.Text>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>{element.description}</Card.Text>
                    <Card.Text>{element.location}</Card.Text>
                    <br />
                    <br />
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
export default Show;