import React, { Component } from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <Router>
        <div className='Home'>
          <SignedInLinks />
        </div>
      </Router>
    );
  }
}
