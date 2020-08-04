import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navBar/Navbar';
import Login from './components/Login/Login';
import ShopNowButton from './components/ShopNowButton/ShopNowButton';
import Catagories from './components/catagories/catagories';
import Footer from './components/footer/Footer';
import { Link, NavLink, Switch } from 'react-router-dom';
import SignedInLinks from './components/navBar/SignedInLinks';
import SignedOutLinks from './components/navBar/SignedOutLinks';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import Show from './components/ShowAdvertising/ٍShow';
import Add from './components/AddAdvertising/Add';
import Cart from './components/cart/cart';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          {/* <Route exact path="/Home" render={App} /> */}
          {/* <Route path="/Login" component={Login} /> */}
        </div>

        <Switch>
          <Route exact path='/Login'>
            <Login />
          </Route>

          <Route exact path='/Register'>
            <Register />
          </Route>

          <Route exact path='/Show'>
            <Show />
          </Route>

          <Route exact path='/Logout'>
            <Logout />
          </Route>

          <Route exact path='/Add'>
            <Add />
          </Route>

          <Route exact path='/Cart'>
            <Cart />
          </Route>

          <Route exact path='/Home'>
            <ShopNowButton />
            <Catagories />
          </Route>
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App;
