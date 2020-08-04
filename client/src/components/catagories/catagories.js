import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import machine from "./machine.png";
import fashion from "./fashion.png";
import chair from "./chair.png";
import { Link } from "react-router-dom";
import FashionList from "../fashionProduct/FashionList";
import $ from "jquery";

import style from "./catagories.css";

class Catagories extends React.Component {
  render() {
    return (
      <div className="catagories">
        <div className="slider">
          <div className="intro">
            <h1>Stay home and shop online</h1>
            <img
              className="machine"
              src={require("./machine.png")}
              alt="machine"
              hight={350}
              width={200}
            />

            <Link to="/FashionList" className="nav-link">
              <img
                className="fashion"
                src={require("./fashion.png")}
                alt="fashion"
                hight={350}
                width={200}
              />
            </Link>

            <img
              className="furniture"
              src={require("./chair.png")}
              alt="furniture"
              hight={350}
              width={200}
            />

            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Catagories;
