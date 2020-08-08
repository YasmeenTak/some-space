import React from "react";
import ReactDOM from "react-dom";
import machine from "./machine.png";
import fashion from "./fashion.png";
import chair from "./chair.png";
import { Link } from "react-router-dom";
import { Card, CardDeck, Button } from "react-bootstrap";

import $ from "jquery";

import style from "./catagories.css";

class Catagories extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <h
          style={{
            fontSize: "30px",
            // background: "HotPink",
            text: "center",
            border: "3px solid HotPink",
            marginLeft: "25%",
            width: "100 %",
          }}
        >
          YOU CAN ALWAYS FIND SOMRTHING YOU WANT
        </h>
        <div class="center">
          <div class="column">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={require("./machine.png")} />
              <Card.Body>
                <Card.Title style={{ fontSize: "45px" }}>MACHINE</Card.Title>
                <Card.Text>
                  Nothing lasts forever, not even the best machines. And
                  everything can be reused.
                </Card.Text>
                <Link to="/Machine">
                  <Button
                    style={{ backgroundColor: "HotPink" }}
                    variant="primary"
                  >
                    Go SHOP
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div class="column">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={require("./fashion.png")} />
              <Card.Body>
                <Card.Title style={{ fontSize: "45px" }}>FASHION</Card.Title>
                <Card.Text>
                  Nothing lasts forever, not even the best clothes. And
                  everything can be reused.
                </Card.Text>
                <Link to="/Fashion">
                  <Button
                    style={{ backgroundColor: "HotPink" }}
                    variant="primary"
                  >
                    Go SHOP
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div class="column">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={require("./chair.png")} />
              <Card.Body>
                <Card.Title style={{ fontSize: "45px" }}>FURNITURE</Card.Title>
                <Card.Text>
                  Nothing lasts forever, not even the best furniture. And
                  everything can be reused.
                </Card.Text>
                <Link to="/Furniture">
                  <Button
                    style={{ backgroundColor: "HotPink" }}
                    variant="primary"
                  >
                    Go SHOP
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Catagories;
