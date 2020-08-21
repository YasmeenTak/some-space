import React from "react";
// import ReactDOM from "react-dom";
// import machine from "./machine.png";
// import fashion from "./fashion.png";
// import chair from "./chair.png";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
// import Furniture from "../Furniture/Furniture";
// import Machine from "../Machine/Machine";
// import Fashion from "../Fashion/Fashion";
import catagoiries from "../catagories/catagories.css";
import axios from "axios";
import { BrowserRouter as Router} from "react-router-dom";
//import DisplayAllProducts from "../displayAllProducts/displayAllProducts";
class Catagories extends React.Component {
  state = {
    products: [],
  };
  handleSubmit(e) {
    axios
      .get("/addProduct")
      .then((result) => {
        console.log(result);
        const finalData = result.data;
        console.log("=====", finalData);
        this.setState({ products: finalData });
        // console.log("hi eman", finalData);
        window.location.reload();
      })
      .catch((err) => {
        console.log("hi");
        console.log("it is an error", err);
      });
  }
  render() {
    return (
      <Router>
        <div style={{ width: "100%", color: "#5a6578" }}>
          <br />
          <br />
          <br />
          <h
            style={{
              fontSize: "30px",
              // "you can"background: "HotPink",
              text: "center",

              marginLeft: "25%",
              width: "100 %",
            }}
          >
            YOU CAN ALWAYS FIND SOMETHING YOU WANT
          </h>
          <br />
          <br />
          <div className="page wrapper">
            <div class="center">
              <div
                className="card"
                style={{ background: "white" }}
              >
                <Card style={{ width: "18rem", background: "white" }}>
                  <Card.Img variant="top" src={require("./machine.png")} />
                  <Card.Body>
                    <br />
                    <br />

                    <Card.Title style={{ fontSize: "45px" }}>
                      MACHINE
                    </Card.Title>
                    {/* <Card.Text style={{ position: "center" }}>
                      Nothing lasts forever, not even the best machines. And
                      everything can be reused.
                    </Card.Text> */}

                    <Link to="/Machine">
                      <div>
                        <br />
                        <br />

                        <Button
                          onClick={this.handleSubmit.bind(this)}
                          style={{ backgroundColor: "HotPink" }}
                          variant="primary"
                        >
                          {/* <Machine products={this.state.products} /> */}
                          Go SHOP
                        </Button>
                      </div>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div class="card" style={{  background: "white" }}>
                <Card style={{ width: "18rem", background: "white" }}>
                  <Card.Img variant="top" src={require("./fashion.png")} />
                  <Card.Body>
                    <br />
                    <br />
                    <Card.Title style={{ fontSize: "45px" }}>
                      FASHION
                    </Card.Title>
                    {/* <Card.Text>
                      Nothing lasts forever, not even the best clothes. And
                      everything can be reused.
                    </Card.Text> */}
                    <Link to="/Fashion">
                      <div>
                        <br />
                        <br />
                        <Button
                          onClick={this.handleSubmit.bind(this)}
                          style={{ backgroundColor: "HotPink" }}
                          variant="primary"
                        >
                          {/* <Fashion products={this.state.products} /> */}
                          Go SHOP
                        </Button>
                      </div>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div class="card" style={{ background: "white" }}>
                <Card style={{ width: "18rem", background: "white" }}>
                  <Card.Img variant="top" src={require("./chair.png")} />
                  <Card.Body>
                    <br />
                    <br />
                    <Card.Title style={{ fontSize: "45px" }}>
                      FURNITURE
                    </Card.Title>
                    {/* <Card.Text>
                      Nothing lasts forever, not even the best furniture. And
                      everything can be reused.
                    </Card.Text> */}
                    <Link to="/Furniture">
                      <div>
                        <br />
                        <br />
                        <Button
                          onClick={this.handleSubmit.bind(this)}
                          style={{ backgroundColor: "HotPink" }}
                          variant="primary"
                        >
                          {/* <Furniture products={this.state.products} /> */}
                          Go SHOP
                        </Button>
                      </div>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <Link to="/DisplayAllProducts">
            <br />
            <br />
            <Button
              onClick={this.handleSubmit.bind(this)}
              style={{ backgroundColor: "HotPink" ,textAlign: 'center', margin: '50px', marginLeft:'45%'}}
              variant="primary"
            >
              {/* <Furniture products={this.state.products} /> */}
              Latest Products
            </Button>
            <br />
            <br />
            {/* <DisplayAllProducts /> */}
          </Link>
          {/* <Route exact path="/DisplayAllProducts">
            <DisplayAllProducts />
            </Route> */}
        </div>
      </Router>
    );
  }
}
export default Catagories;
