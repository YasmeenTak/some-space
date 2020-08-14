import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';
import chairs from './chairs.jpg';
import axios from 'axios';
import './style.css';
import jwt_decode from 'jwt-decode';
//import { Card } from '@material-ui/core';

class Show extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    Products: [],
  };
  // get all product user added for sell
  componentDidMount() {
    const token = localStorage.token;
    var decode = jwt_decode(token);
    //console.log(decode, 'ggggggggggggggggggggggggs');
    axios
      .get(`/findProduct/${decode.UserID}`)
      .then((response) => {
        //console.log(response);
        this.setState({ Products: response.data });
        //console.log(this.state, 'product saved');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { Products } = this.state;
    return (
      <div className='ShowMyAds__div'>
        {Products.map((Products, index) => (
          <Container>
            <Card className='ShowMyAds__Card'>
              <img
                alt='product img'
                src={Products.images}
                style={{ maxWidth: '150px', margin: '2rem auto' }}
              ></img>
              <p>{Products.title}</p>
              <p>{Products.description}</p>
              <p>{Products.price}</p>
              <p>{Products.category}</p>
              <p>{Products.location}</p>

              <div className='Btn'>
                <Button className='Edit_Btn'>Edit</Button>
                <Button className='Remove_Btn'>Remove</Button>
              </div>
            </Card>
          </Container>
        ))}
      </div>
    );
  }
}
export default Show;
