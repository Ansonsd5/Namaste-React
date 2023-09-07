import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";





const RestaurantCard = (props) => {
  // const { loggedInUser } = useContext(UserContext);
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
    <div className="flex flex-col p-4 rounded-md bg-orange-50">
      <div className="">
        <img
          className="w-full h-[200px]  rounded-md"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="w-full h-[150] ">
        <h3 className="font-bold text-slate-500">{name}</h3>
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

export const RestaurantCardWithLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="absolute top-8 left-8  bg-green-400 text-sm"  >High Avg Rating</div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
