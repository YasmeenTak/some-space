import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';
import chairs from './chairs.jpg';
import axios from 'axios';
import './style.css';
import jwt_decode from 'jwt-decode';
import moment from 'moment';
import icon from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
class Show extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    Products: [],
    productID: '',
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
      .delete('/remove-one', {
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
        console.log('Error', err);
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
    return (
      <div className='ShowMyAds__div'>
        {Products.map((ele, index) => {
          var category = 'Furniture';
          if (ele.category === 3) {
            category = 'Machine';
          } else if (ele.category === 1) {
            category = 'Fashion';
          }
          var quality = 'Exellent';
          if (ele.quality === '3') {
            quality = 'Very good';
          } else if (ele.quality === '1') {
            quality = 'Good';
          }
          return (
            <div class='container'>
              <div id='card'>
                <div class='card horizontal'>
                  <div class='card-image'>
                    <img
                      className='img-fluid'
                      alt='product img'
                      src={ele.images}
                    ></img>
                  </div>
                  <div class='card-stacked'>
                    <div class='card-content'>
                      <p>
                        <span className='details'>Title: </span> {ele.title}
                      </p>
                      <p>
                        <span className='details'>Description: </span>
                        {ele.description}
                      </p>
                      <p>
                        <span className='details'>Price: </span>
                        {ele.price}
                      </p>
                      <p>
                        <span className='details'>Category: </span>
                        {category}
                      </p>
                      <p>
                        <span className='details'>Location: </span>
                        {ele.location}
                      </p>
                      <p>
                        <span className='details'>Quality:</span>
                        {ele.quality}
                      </p>
                      <p>
                        <span className='details'>Date: </span>
                        {moment(ele.dateOfAdd.date).format('DD-MM-YYYY')}
                      </p>
                    </div>
                    <div class='card-action'>
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={this.updateItem}
                      />
                      <i class='fas fa-edit'></i>
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={(event) =>
                          this.handleRemove(event, ele.productID)
                        }
                      />
                      <span className='Remove'>
                        <i class='fas fa-trash'></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Show;
//lasssssssssst edit
