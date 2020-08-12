//another desighn to categories but it did not

import React, { Component, Link } from "react";
import machine from "./machine.png";
import fashion from "./fashion.png";
import chair from "./chair.png";
import { useHistory } from "react-router-dom";
import Fashion from "../Fashion/Fashion";
import "./style-card.css";
import { Button } from "react-bootstrap";

const Card = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image 1" className="card-img-top" />
        {/* <Button className="btn btn-outline-success">SHOP NOW</Button> */}
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Nothing lasts forever, not even the best fashion,furniture or
          machines. And everything can be reused.
        </p>

        {/* <a href= className="btn btn-outline-success">
          Go Shop
        </a>  */}
      </div>
    </div>
  );
};

class Catagories extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={machine} title="MACHINE" />
            <Button className="btn btn-outline-success">SHOP NOW</Button>
          </div>
          <div className="col-md-4">
            <Card imgsrc={fashion} title="FASHION" />
            <Button className="btn btn-outline-success">SHOP NOW</Button>
          </div>
          <div className="col-md-4">
            <Card imgsrc={chair} title="FURNITURE" />
            <Button className="btn btn-outline-success">SHOP NOW</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Catagories;
