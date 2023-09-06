import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [showCatagoryItems, setShowCatagoryItems] = useState(false);
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const dummy = "this is dammy data";

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const requiredDataForAccordian =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cata) =>
        cata?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-6/12 mx-auto drop-shadow-2xl">
      <div className="align-middle flex justify-center font-bold text-2xl">
        {name}
      </div>
      <div className="font-semibold flex justify-center">
        {cuisines.join(",")} {costForTwoMessage}{" "}
      </div>
      {requiredDataForAccordian.map((catagory, index) => (
        <div>
          <RestaurantCategory
            data={catagory?.card?.card}
            showitems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        </div>
      ))}
    </div>
  );
};
export default RestaurantMenu;
