import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
// import ReactSearchBox from "react-search-box";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
// import ShopNow from "../ShopNowButton/ShopNowButton";
// import searchByTitle from "../searchByTitle/searchByTitle";
class Machine extends Component {
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
        .post('/removeOneFromCarts', { productID: e })
        .then((result) => {
          console.log('delete it from product');
          window.location.href = '/Payment';
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      window.location.href = '/Register';
      // this.props.history.push("/Login");
    }
  }

  handleClick(id) {
    if (localStorage.token) {
      const token = localStorage.token;
      var decode = jwt_decode(token);
      console.log(decode.UserID, 'Hi this is inside ');
      axios
        .post('/addToCardUser', { productID: id, UserID: decode.UserID })
        .then((result) => {
          console.log('this is in card in ', result);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      window.location.href = '/Register';
      // this.props.history.push("/Login");
    }
  }
  async getProducts(value) {
    console.log(value);
    if (value !== undefined || value === '') {
      var newProduct = [];
      for (var i = 0; i < this.state.products.length; i++) {
        if (this.state.products[i].title === value) {
          newProduct.push(this.state.products[i]);
        }
      }
      this.setState({ products: newProduct });
      console.log(this.state.products, 'qqqqqqqqq');
    } else {
      await axios
        .post('/category', { category: 3 })
        .then((result) => {
          console.log(result);
          const finalData = result.data;
          //console.log("=====>>>>////???>>>", finalData);
          this.setState({ products: finalData });
          console.log(this.state.products, 'cccccc');
        })
        .catch((err) => {
          console.log('it is an error in Furniture compoments', err);
        });
    }
  }
  render() {
    // console.log(this.state);

    const products = this.state.products ? this.state.products : [];
    return (
      <div>
        <Link to='/e'>
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
            if (element.quality === '3') {
              quality = 'good';
            } else if (element.quality === '1') {
              quality = 'Exellent';
            }
            return (
              <row>
                <Card style={{ width: '22rem' }}>
                  <Card.Img variant='top' src={element.images} />
                  <Card.Body style={{ color: '#333d82' }}>
                    <Card.Title>{element.title}</Card.Title>
                    <br></br>
                    <Card.Text>Price: $ {element.price}</Card.Text>
                    <Card.Text>Quality: {quality}</Card.Text>
                    <Card.Text>Description: {element.description}</Card.Text>
                    <Card.Text>Location: {element.location}</Card.Text>

                    {/* <Link to="/Payment" className="brand-logo"> */}
                    <Button
                      class='ui small pink button'
                      variant='primary'
                      style={{
                        marginLeft: '40px',
                        margin: '30px',
                        backgroundColor: '#EC407A',
                      }}
                      value={this.state.products}
                      onClick={() => {
                        this.handleSubmit(element._id);
                      }}
                    >
                      {/* buy */}
                      <i class='payment icon'></i>
                    </Button>
                    {/* </Link> */}

                    <Button
                      class='ui small pink button'
                      style={{ backgroundColor: '#EC407A' }}
                      variant='primary'
                      value={this.state.products}
                      onClick={() => {
                        this.handleClick(element._id);
                      }}
                    >
                      {/* To Cart */}
                      <i class='cart icon'></i>
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
export default Machine;

// import React, { Component } from 'react';
// import axios from 'axios';
// import { Card, Button, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
// import ReactSearchBox from 'react-search-box';
// import ShopNow from '../ShopNowButton/ShopNowButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
// // import searchByTitle from "../searchByTitle/searchByTitle";

// class Machine extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//     this.getProducts();
//   }
//   state = {
//     products: [],
//   };
//   // handleClick(id) {
//   //   console.log(id, "The button was clicked.");
//   // }
//   handleSubmit(e) {
//     if (localStorage.token) {
//       window.location.href = '/Payment';
//     } else {
//       window.location.href = '/Register';
//       // this.props.history.push("/Login");
//     }
//   }

//   handleClick(id) {
//     if (localStorage.token) {
//       const token = localStorage.token;
//       var decode = jwt_decode(token);
//       axios
//         .post('/addToCardUser', { productID: id, UserID: decode.UserID })
//         .then((result) => {
//           console.log('this is in card in ', result);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       window.location.href = '/Register';
//       // this.props.history.push("/Login");
//     }
//   }

//   async getProducts() {
//     await axios
//       .post('/category', { category: 3 })
//       .then((result) => {
//         console.log(result);
//         const finalData = result.data;

//         console.log('=====>>>>////???>>>', finalData);
//         this.setState({ products: finalData });
//       })
//       .catch((err) => {
//         console.log('it is an error in Machine compoments', err);
//       });
//   }
//   render() {
//     console.log(this.state);

//     var products = this.state.products ? this.state.products : [];
//     console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', products);
//     var counter = 0;
//     return (
//       <div>
//         <Link to='/Home'>
//           <FontAwesomeIcon
//             icon={faAngleDoubleLeft}
//             style={{ color: 'hotPink', fontSize: '40' }}
//           />
//           <i class='fas fa-angle-double-left'></i>
//         </Link>
//         {/* <ReactSearchBox
//           placeholder="Search for products"
//           products={products}
//           onSelect={(record) => console.log(record)}
//           onFocus={() => {
//             console.log("This function is called when is focussed");
//           }}
//           onChange={(value) => console.log(value)}
//           fuseConfigs={{
//             threshold: 0.05,
//           }}
//           value="cookie"
//         /> */}

//         {products.length != 0
//           ? products.map((element, i) => {
//               counter++;
//               if (counter == 4) {
//                 counter = 0;
//                 return;
//               } else {
//                 console.log(products[i], 'elemeeeeeeeeeeeeent');

//                 var quality1 = 'very good';
//                 if (products[i].quality == '3') {
//                   quality1 = 'good';
//                 } else if (products[i].quality == '1') {
//                   quality1 = 'Exellent';
//                 }
//                 var quality2 = 'very good';
//                 if (products[i].quality == '3') {
//                   quality2 = 'good';
//                 } else if (products[i].quality == '1') {
//                   quality2 = 'Exellent';
//                 }
//                 var quality3 = 'very good';
//                 if (products[i].quality == '3') {
//                   quality3 = 'good';
//                 } else if (products[i].quality == '1') {
//                   quality3 = 'Exellent';
//                 }
//                 var quality4 = 'very good';
//                 if (products[i].quality == '3') {
//                   quality4 = 'good';
//                 } else if (products[i].quality == '1') {
//                   quality4 = 'Exellent';
//                 }
//                 return (
//                   <Row>
//                     {/* <ShopNow/>
//                   <searchByTitle/> */}
//                     {products[i] ? (
//                       <Col>
//                         <Card style={{ width: '18rem' }}>
//                           <Card.Img variant='top' src={products[i].images} />
//                           <Card.Body>
//                             <Card.Title>{products[i].title}</Card.Title>
//                             <Card.Text>Price: $ {products[i].price}</Card.Text>
//                             <Card.Text>Quality: {quality1}</Card.Text>
//                             <Card.Text>
//                               Description: {products[i].description}
//                             </Card.Text>
//                             <Card.Text>
//                               Location: {products[i].location}
//                             </Card.Text>
//                             {/* <Link to="/Payment" className="brand-logo"> */}
//                             <Button
//                               variant='primary'
//                               style={{
//                                 marginLeft: '40px',
//                                 margin: '30px',
//                                 backgroundColor: '#EC407A',
//                               }}
//                               value={this.state.products}
//                               onClick={() => {
//                                 this.handleSubmit(products[i]._id);
//                               }}
//                             >
//                               buy
//                             </Button>
//                             {/* </Link> */}

//                             <Button
//                               style={{ backgroundColor: '#EC407A' }}
//                               variant='primary'
//                               value={this.state.products}
//                               onClick={() => {
//                                 this.handleClick(products[i]._id);
//                               }}
//                             >
//                               To Cart
//                             </Button>
//                           </Card.Body>
//                         </Card>
//                       </Col>
//                     ) : (
//                       <Col></Col>
//                     )}
//                     {products[i + 1] ? (
//                       <Col>
//                         <Card style={{ width: '18rem' }}>
//                           <Card.Img variant='top' src={products[i].images} />
//                           <Card.Body>
//                             <Card.Title>{products[i + 1].title}</Card.Title>
//                             <Card.Text>
//                               Price: $ {products[i + 1].price}
//                             </Card.Text>
//                             <Card.Text>Quality: {quality2}</Card.Text>
//                             <Card.Text>
//                               Description: {products[i + 1].description}
//                             </Card.Text>
//                             <Card.Text>
//                               Location: {products[i + 1].location}
//                             </Card.Text>
//                             {/* <Link to="/Payment" className="brand-logo"> */}
//                             <Button
//                               variant='primary'
//                               style={{
//                                 marginLeft: '40px',
//                                 margin: '30px',
//                                 backgroundColor: '#EC407A',
//                               }}
//                               value={this.state.products}
//                               onClick={() => {
//                                 this.handleSubmit(products[i + 1]._id);
//                               }}
//                             >
//                               buy
//                             </Button>
//                             {/* </Link> */}

//                             <Button
//                               style={{ backgroundColor: '#EC407A' }}
//                               variant='primary'
//                               value={this.state.products}
//                               onClick={() => {
//                                 this.handleClick(products[i + 1]._id);
//                               }}
//                             >
//                               To Cart
//                             </Button>
//                           </Card.Body>
//                         </Card>
//                       </Col>
//                     ) : (
//                       <Col></Col>
//                     )}
//                     {products[i + 2] ? (
//                       <Col>
//                         <Card style={{ width: '18rem' }}>
//                           <Card.Img
//                             variant='top'
//                             src={products[i + 2] ? products[i + 2].images : ''}
//                           />
//                           <Card.Body>

//                             <Card.Title>{products[i + 2].title}</Card.Title>
//                             <Card.Text>
//                               Price: $ {products[i + 2].price}
//                             </Card.Text>
//                             <Card.Text>Quality: {quality3}</Card.Text>
//                             <Card.Text>
//                               Description:{' '}
//                               {products[i + 2]
//                                 ? products[i + 2].description
//                                 : ''}
//                             </Card.Text>
//                             <Card.Text>
//                               Location:{' '}
//                               {products[i + 2] ? products[i + 2].location : ''}
//                             </Card.Text>
//                             {/* <Link to="/Payment" className="brand-logo"> */}
//                             <Button
//                               variant='primary'
//                               style={{
//                                 marginLeft: '40px',
//                                 margin: '30px',
//                                 backgroundColor: '#EC407A',
//                               }}
//                               value={this.state.products}
//                               onClick={() => {
//                                 this.handleSubmit(products[i + 2]._id);
//                               }}
//                             >
//                               buy
//                             </Button>
//                             {/* </Link> */}

//                             <Button
//                               style={{ backgroundColor: '#EC407A' }}
//                               variant='primary'
//                               value={this.state.products}
//                               onClick={() => {
//                                 this.handleClick(products[i + 2]._id);
//                               }}
//                             >
//                               To Cart
//                             </Button>
//                           </Card.Body>
//                         </Card>
//                       </Col>
//                     ) : (
//                       <Col></Col>
//                     )}
//                     {products[i + 3] ? (
//                       <Col>
//                         <Card style={{ width: '18rem' }}>
//                           <Card.Img
//                             variant='top'
//                             src={products[i + 3].images}
//                           />
//                           <Card.Body>
//                             <Row>
//                               <Col>
//                                 <Card.Title>{products[i + 3].title}</Card.Title>
//                                 <Card.Text>
//                                   Price: $ {products[i + 3].price}
//                                 </Card.Text>
//                                 <Card.Text>Quality: {quality4}</Card.Text>
//                                 <Card.Text>
//                                   Description: {products[i + 3].description}
//                                 </Card.Text>
//                                 <Card.Text>
//                                   Location: {products[i + 3].location}
//                                 </Card.Text>
//                                 {/* <Link to="/Payment" className="brand-logo"> */}
//                               </Col>
//                             </Row>
//                             <Row>
//                               <Col>
//                                 <Button
//                                   variant='primary'
//                                   style={{
//                                     marginLeft: '40px',
//                                     margin: '30px',
//                                     backgroundColor: '#EC407A',
//                                   }}
//                                   value={this.state.products}
//                                   onClick={() => {
//                                     this.handleSubmit(products[i + 3]._id);
//                                   }}
//                                 >
//                                   buy
//                                 </Button>
//                                 {/* </Link> */}

//                                 <Button
//                                   style={{ backgroundColor: '#EC407A' }}
//                                   variant='primary'
//                                   value={this.state.products}
//                                   onClick={() => {
//                                     this.handleClick(products[i + 3]._id);
//                                   }}
//                                 >
//                                   To Cart
//                                 </Button>
//                               </Col>
//                             </Row>
//                           </Card.Body>
//                         </Card>
//                       </Col>
//                     ) : (
//                       <Col></Col>
//                     )}
//                   </Row>
//                 );
//               }
//             })
//           : ''}
//       </div>
//     );
//   }
// }
// export default Machine;
