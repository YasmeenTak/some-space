import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navBar/Navbar";
import Login from "./components/Login/Login";
import ShopNowButton from "./components/ShopNowButton/ShopNowButton";
import Catagories from "./components/catagories/catagories";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/Home" render={App} />
          <Route path="/Login" component={Login} />
          <ShopNowButton />
          <Catagories />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
