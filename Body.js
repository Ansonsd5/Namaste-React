import React from "react";
import food from "./assets/images/foodImg.png";

const RestaurantCard = (props) => (
  <div className="restaurantCard">
    <img src={food} />
    <div className="restaurantName">{props.restaurantName}</div>
    <div className="dishName">{props.cuisine}</div>
    <div className="ratings">{props.ratings}</div>
  </div>
);

export const Body = () => (
  <div className="bodyWrapper">
    <div className="search">Search</div>
    <div className="restaurantWrapper">
      <RestaurantCard restaurantName="Tikka Hut" ratings="4.0" cuisine="Tikka"/>
      <RestaurantCard restaurantName="Hot Pot" ratings="3.9" cuisine="Briyani"/>
      <RestaurantCard restaurantName="Royal Food" ratings="4.5" cuisine="Noodels"/>
      <RestaurantCard restaurantName="Chai point" ratings="4.2" cuisine="Tea"/>
      
    </div>
  </div>
);
