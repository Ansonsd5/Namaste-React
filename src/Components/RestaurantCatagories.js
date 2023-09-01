import React from "react";

const RestaurantCatagories = ({ data }) => {
  return (
    <div>
      {data.map((dish, index) => (
        <div className="bg-red-300 my-2 " key={dish?.card?.info?.id + index}>{dish?.card?.info?.name}</div>
      ))}
    </div>
  );
};

export default RestaurantCatagories;
