import React from 'react';
import ReactDOM from 'react-dom';
import machine from './machine.png';
import fashion from './fashion.png';
import chair from './chair.png';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Furniture from '../Furniture/Furniture';
import Machine from '../Machine/Machine';
import Fashion from '../Fashion/Fashion';
import catagoiries from '../catagories/catagories.css';
import axios from 'axios';
class Catagories extends React.Component {
  state = {
    products: [],
  };
  handleSubmit(e) {
    axios
      .get('/addProduct')
      .then((result) => {
        console.log(result);
        const finalData = result.data;
        console.log('=====', finalData);
        this.setState({ products: finalData });
        // console.log("hi eman", finalData);
      })
      .catch((err) => {
        console.log('hi');
        console.log('it is an error', err);
      });
  }
  render() {
    return (
      <div style={{ width: '100%' }}>
        <h
          style={{
            fontSize: '30px',
            // "you can"background: "HotPink",
            text: 'center',
            border: '3px solid HotPink',
            marginLeft: '25%',
            width: '100 %',
          }}
        >
          YOU CAN ALWAYS FIND SOMRTHING YOU WANT
        </h>
        <div className='page wrapper'>
          <div class='center'>
            <div className='card'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={require('./machine.png')} />
                <Card.Body>
                  <Card.Title style={{ fontSize: '45px' }}>MACHINE</Card.Title>
                  <Card.Text>
                    Nothing lasts forever, not even the best machines. And
                    everything can be reused.
                  </Card.Text>
                  <Link to='/Machine'>
                    <div>
                      <Button
                        onClick={this.handleSubmit.bind(this)}
                        style={{ backgroundColor: 'HotPink' }}
                        variant='primary'
                      >
                        {/* <Machine products={this.state.products} /> */}
                        Go SHOP
                      </Button>
                    </div>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div class='card'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={require('./fashion.png')} />
                <Card.Body>
                  <Card.Title style={{ fontSize: '45px' }}>FASHION</Card.Title>
                  <Card.Text>
                    Nothing lasts forever, not even the best clothes. And
                    everything can be reused.
                  </Card.Text>
                  <Link to='/Fashion'>
                    <div>
                      <Button
                        onClick={this.handleSubmit.bind(this)}
                        style={{ backgroundColor: 'HotPink' }}
                        variant='primary'
                      >
                        {/* <Fashion products={this.state.products} /> */}
                        Go SHOP
                      </Button>
                    </div>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div class='card'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={require('./chair.png')} />
                <Card.Body>
                  <Card.Title style={{ fontSize: '45px' }}>
                    FURNITURE
                  </Card.Title>
                  <Card.Text>
                    Nothing lasts forever, not even the best furniture. And
                    everything can be reused.
                  </Card.Text>
                  <Link to='/Furniture'>
                    <div>
                      <Button
                        onClick={this.handleSubmit.bind(this)}
                        style={{ backgroundColor: 'HotPink' }}
                        variant='primary'
                      >
                        {/* <Furniture products={this.state.products} /> */}
                        Go SHOP
                      </Button>
                    </div>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Catagories;