import React from "react";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagories from "./RestaurantCatagories";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showCatagoryItems, setShowCatagoryItems] = useState(false);
  const [showIndex , setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const restaurantName = resInfo?.cards[0]?.card?.card?.info?.name;

  const requiredDataForMenu =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cata) =>
        cata?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleAccordian = (i) => {
    console.log("i",i);
    setShowCatagoryItems(!showCatagoryItems);
    setShowIndex(i)
  };
  

  return (
    <div>
      <div className="font-bold text-xxl text-center">{restaurantName}</div>
      <div className="p-10">
        {requiredDataForMenu?.map((catagory, index) => (
          <div>
            <div
              className="flex justify-between bg-primaryBg py-4 mt-4 cursor-pointer"
              key={catagory?.card?.card.title}
              onClick={()=>{handleAccordian(index)}}
            >
              <div className="w-8/12 pl-8 text-lg font-bold">
                {catagory?.card?.card?.title}(
                {catagory?.card?.card?.itemCards.length})
              </div>
              <div className={showCatagoryItems ? "p-4 rotate-180" : "p-4"}>
                ⮟
              </div>
            </div>
            <div>
              {showCatagoryItems && (
                <RestaurantCatagories
                  key={catagory?.card?.card?.id}
                  data={catagory?.card?.card?.itemCards}
                  index={showIndex}
                />
               
              )}
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
