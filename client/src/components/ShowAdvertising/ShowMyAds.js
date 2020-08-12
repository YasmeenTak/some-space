import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';
import chairs from './chairs.jpg';
//import axios from './axios';
import './style.css';
//import { Card } from '@material-ui/core';
class Show extends Component {
  state = {};
  // handleSubmit(e) {
  //   axios.get('/showMyAds').then((result) => {
  //     console.log(result);
  //   });
  // }
  render() {
    return (
      <div className='ShowMyAds__div'>
        <Container>
          <Card className='ShowMyAds__Card'>
            <img className='poduct_img' src={chairs} alt='product img' />
            <div className='details__div'>
              <p className='title'>Charis</p>
              <p className='category'>Furniture</p>
              <p className='price'>50$</p>
              <p className='dateOfBuy'>11/8/2020</p>
              <p className='location'>Gaza</p>
            </div>
            <div className='Btn'>
              <Button className='Edit_Btn'>Edit</Button>
              <Button className='Remove_Btn'>Remove</Button>
            </div>
          </Card>
        </Container>
      </div>
    );
  }
}
export default Show;
