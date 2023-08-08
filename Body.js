import React from "react";
import food  from "./assets/images/foodImg.png"

export const Body = () => (
  <div className="bodyWrapper">
    <div className="search">Search</div>
    <div className="restaurantWrapper">
      <div className="restaurantCard">
        <img src={food} />
        <div className="dishName">Briyani</div>
        <div>Other Details</div>
      </div>

    </div>
  </div>
);
