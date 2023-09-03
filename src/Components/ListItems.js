import React from "react";
// import { CDN_URL } from "../utils/constants";

const ListItems = ({ items }) => {
  console.log(items);
  return (
    <div className="">
      {items?.map((item) => (
        <div className="bg-blue-200 bg-opacity-50 px-10 flex justify-between py-2 border-b-4 border-indigo-500 border-opacity-5" key={item?.card?.info?.id} >
          <div>
          <div className=" text-sm font-semibold">{item?.card?.info?.name}</div>
          <div className="font-semibold">Price - ₹{item?.card?.info?.price ? item?.card?.info?.price/100 :item?.card?.info?.defaultPrice/100}</div>
          </div>
          <div className="">
            <img className="w-7/16 object-cover h-10" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item?.card?.info?.imageId} alt="listImage"/>

          </div>
          </div>
      ))}
    </div>
  );
};

export default ListItems;
