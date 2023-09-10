import React from "react";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
// import { CDN_URL } from "../utils/constants";

const ListItems = ({ items }) => {
  const dispatch = useDispatch();
  console.log(items);

  const addBtnHandler = (item) => {
    //dispatch a action 
    dispatch(addItems(item))
    console.log(item,"item")
  }
  return (
    <div className="flex-col justify-between ">
      {items?.map((item) => (
        <div
          className="bg-blue-200 bg-opacity-50 px-10 flex justify-between  py-2 border-b-4 border-indigo-500 border-opacity-5"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className=" text-sm font-semibold">
              {item?.card?.info?.name}
            </div>
            <div className="font-semibold">
              Price - ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </div>
            <div className="w-5/8 text-xs">{item?.card?.info?.description}</div>
          </div>
          <div className="w-3/12 h-auto flex justify-evenly relative">
            <img
              className="  h-10"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item?.card?.info?.imageId
              }
              alt="listImage"
            />
            <div className="absolute bg-primary rounded px-4 py-1 text-xs shadow-lg text-green-600 bottom-0">
             <button onClick={() => addBtnHandler(item)}>Add+</button> 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
