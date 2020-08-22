import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navBar/Navbar';
import Login from './components/Login/Login';
import ShopNowButton from './components/ShopNowButton/ShopNowButton';
import Catagories from './components/catagories/catagories';
import Footer from './components/footer/Footer';
import { Switch } from 'react-router-dom';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import Add from './components/AddAdvertising/Add';
import Cart from './components/cart/cart';
import Fashion from './components/Fashion/Fashion';
import Furniture from './components/Furniture/Furniture';
import Machine from './components/Machine/Machine';
import Payment from './components/Payment/Payment';
import Show from './components/ShowAdvertising/ShowMyAds';
import DisplayAllProducts from './components/displayAllProducts/displayAllProducts';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          {/* <searchByTitle /> */}

          <Navbar />

          {/* <ShopNow />
          <Catagories /> */}
        </div>
        {/* navbar */}
        <Switch>
          <Route exact path='/Login'>
            <Login />
          </Route>
          <Route exact path='/Register'>
            <Register />
          </Route>
          <Route exact path='/ShowMyAds'>
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
          <Route exact path='/DisplayAllProducts'>
            <DisplayAllProducts />
          </Route>
          <Route exact path='/Payment'>
            <Payment />
          </Route>
          <Route exact path='/'>
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
