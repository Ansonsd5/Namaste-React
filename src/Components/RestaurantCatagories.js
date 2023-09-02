import React from "react";


const RestaurantCatagories = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((dish, index) => (
        <div className="bg-green-100 my-2 flex p-8" key={dish?.card?.info?.id + index}>
          <div className="w-2/10 h-9"><img className="w-9/4 h-8" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+dish?.card?.info?.imageId}></img></div>
          {dish?.card?.info?.name}
          </div>
      ))}
    </div>
  );
};

export default RestaurantCatagories;
