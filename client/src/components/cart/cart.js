import React, { Component } from 'react';
import UserCard from './action/UserCard';
import { Result, Empty } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class Cart extends Component {
  render() {
    return (
      <div style={{ width: '85%', margin: '3rem auto' }}>
        <h1>My Cart</h1>
        <div>
          {' '}
          <UserCard />
          <div style={{ marginTop: '3rem' }}></div>
          <h2>Total amount: $</h2>
        </div>
        <Result status='success' title='Successfully Purchased Items' /> 
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <br />
          <Empty description={false} />
          <p>No Items In the Cart</p>
        </div>
      </div>
    );
  }
}

export default Cart;
