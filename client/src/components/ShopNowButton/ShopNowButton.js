import React from "react";
import shop from "./shop.jpg";
import style from "./style.css";
import { Link } from "react-router-dom";

class ShopNow extends React.Component {
  render() {
    return (
      <div className="ShopNow">
        <div className="slider">
          <div className="shadow">
            <div className="intro">
              <h1>
                MOST BRANDS WANT TO SEE THERIR PRODUCTS USED IN CREATIVE WAYS
              </h1>
              <br />
              <br />
              <Link to="/ShopNow" className="button">
                <button>
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
