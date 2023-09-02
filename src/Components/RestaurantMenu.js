import React from 'react';

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagories from "./RestaurantCatagories";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showCatagoryItems, setShowCatagoryItems] = useState(false);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const restaurantName = resInfo?.cards[0]?.card?.card?.info?.name;

  const requiredDataForMenu =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cata) =>
        cata?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleAccordian = () => {
    setShowCatagoryItems(!showCatagoryItems);
  };

  return (
    <div>
      <div className="font-bold text-xxl text-center">{restaurantName}</div>
      <div className="p-10">
        {requiredDataForMenu?.map((catagory, index) => (
          <div>
            <div
              className="flex justify-around bg-primaryBg py-4 my-3 cursor-pointer"
              key={catagory?.card?.card.title}
              onClick={handleAccordian}
            >
              <div className="w-16">{catagory?.card?.card.title}</div>
              <div>⮟</div>
            </div>
            <div>
              {setShowCatagoryItems && (
                <RestaurantCatagories data={catagory?.card?.card?.itemCards} />
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
