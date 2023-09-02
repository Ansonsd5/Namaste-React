import React from "react";

const RestaurantCatagories = ({ data,index }) => {
  console.log("props from caller",index);
  return (
    <div className="">
      {data.map((dish) => (
     
        <div
          className="bg-green-100  flex p-4 justify-between border-b-2 border-gray-600 border-opacity-50" 
          key={dish?.card?.info?.id}
        >
          {console.log()}
           
         <div className="font-bold text-black px-2 flex-col justify-between">
          <div className="w-6/8">{dish?.card?.info?.name}</div>
          {dish?.card?.info?.price ?<div>Price - ₹{dish?.card?.info?.price/100}</div>:<div>Price - ₹{dish?.card?.info?.defaultPrice}</div>}
          </div>
          <img
              className="w-20 h-auto object-cover"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                dish?.card?.info?.imageId
              }
            ></img>
        </div>
       
      ))}
    </div>
  );
};

export default RestaurantCatagories;
