import React from "react";
// import shop from "./shop.jpg";
import style from "./style.css";
import { Link } from "react-router-dom";

class ShopNow extends React.Component {
  render() {
    return (
      <div className="ShopNow" style={{border:0}}>
        <div className="slider">
          <div className="shadow">
            <div className="intro">
              <h1 style={{color:"#5a6578", fontStyle:"italic"}}>
                MOST BRANDS WANT TO SEE THEIR PRODUCTS USED IN CREATIVE WAYS
              </h1>
              <br />
              <br />
              <Link to="/ShopNow" className="button">
                <button style={{border:0,fontStyle:"italic"

                 , fontfamily: "Gabriela" , fontSize: "35px", color:"#5a6578"}}>
                  <span>Shop Now</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopNow;
