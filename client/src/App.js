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
import LogOut from './components/Logout/Logout';
import Register from './components/Register/Register';
import Show from './components/ShowAdvertising/ٍShow';
import Add from './components/AddAdvertising/Add';
import Cart from './components/cart/cart';
import Fashion from './components/Fashion/Fashion';
import Furniture from './components/Furniture/Furnature';
import Machine from './components/Machine/Machine';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
        </div>

        {/* navbar */}
        <Switch>
          <Route
            exact
            path='/Login'
            render={(props) => <Login {...props} />}
          ></Route>

          <Route
            exact
            path='/Register'
            render={(props) => <Register {...props} />}
          ></Route>

          <Route exact path='/Show'>
            <Show />
          </Route>

          <Route exact path='/LogOut'>
            <LogOut />
          </Route>

          <Route exact path='/Add'>
            <Add />
          </Route>

          <Route exact path='/Cart'>
            <Cart />
          </Route>
          {/* Catagories */}
          <Route exact path='/Fashion'>
            <Fashion />
          </Route>

          <Route exact path='/Furniture'>
            <Furniture />
          </Route>

          <Route exact path='/Machine'>
            <Machine />
          </Route>

          {/* ShopButtonNow */}
          <Route exact path='/ShopNow'>
            <Catagories />
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
