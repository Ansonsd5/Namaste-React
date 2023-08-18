import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData.info;

  return (
    <div className="restaurantCardWrapper">
      <div className="cardImageconatiner">
      <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
      </div>
      <div className="cardContentWrapper">
      <h3>{name}</h3>
      <div className="cuisines">{cuisines.join(", ")}</div>
      <div className="avgstarandCost">
        <div className="avgStarCostOfTwo">
        <div>{avgRating} stars</div>
        <div>{costForTwo} </div>
        </div>
      
      </div>
      </div>
     
    </div>
  );
};




export default RestaurantCard;