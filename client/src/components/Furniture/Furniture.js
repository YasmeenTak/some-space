import React, { Component } from "react";
// import chair.png from "./chair.png"

class Furniture extends Component {
  render() {
    return (
      <div className="containerFurniture">
        <div className="img">
          <img
            src="https://secure.img1-fg.wfcdn.com/im/21536670/resize-h700-w700%5Ecompr-r85/6092/60926851/Bedwell+Dining+Table.jpg"
            alt="Table"
          />
          <div> Title: Table</div>
          <price>Price: 100$</price>
          <a className="addToCat" href="#">
            Add to Cart
          </a>
        </div>

        <div className="img">
          <img
            src="https://images.dfs.co.uk/i/dfs/belair_3a_cotswoldplain_ash_view1?$pdp-mobile$"
            alt="Sofa"
          />
          <div> Title: Sofa</div>
          <price>Price: 100$</price>
          <a className="addToCat" href="#">
            Add to Cart
          </a>
        </div>

        <div className="img">
          <img
            src="https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dw0b805ada/images/1220000/1223156.jpg"
            alt="bed"
          />
          <div> Title: Bed</div>
          <price>Price: 100$</price>
          <a className="addToCat" href="#">
            Add to Cart
          </a>
        </div>
      </div>
    );
  }
}

export default Furniture;
