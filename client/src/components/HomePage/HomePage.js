import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../navBar/Navbar";
import Footer from "../footer/Footer";
import ShopNow from "../ShopNowButton/ShopNowButton";
import Catagories from "../catagories/catagories";
import FashionList from "../fashionProduct/FashionList";

class HomePage extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <ShopNow />
          <Catagories />
          <Route path="/FashionList" component={FashionList} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default HomePage;
