import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import Shimmer from "../Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showCatagoryItems, setShowCatagoryItems] = useState(false);
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
      <div className="align-middle flex justify-center font-bold text-2xl">{name}</div>
      <div className="font-semibold flex justify-center">
        {cuisines.join(",")} {costForTwoMessage}{" "}
      </div>
      {requiredDataForAccordian.map((catagory, index) => (
        <div>
          <RestaurantCategory data={catagory?.card?.card} />
        </div>
      ))}
    </div>
  );

  //     <div>

  //       <div className="font-bold text-xxl text-center">{name}</div>
  //       <div className="">{cuisines.join(",")}{costForTwoMessage}</div>
  //       {/* <div className="p-10">
  //         {requiredDataForMenu?.map((catagory, index) => (
  //           <div>
  //             {/* <div
  //               className="flex justify-between bg-primaryBg py-4 mt-4 cursor-pointer"
  //               key={catagory?.card?.card.title}
  //               onClick={()=>{setShowCatagoryItems(i === showIndex ? true : false)}}
  //             >
  //               <div className="w-8/12 pl-8 text-lg font-bold">
  //                 {catagory?.card?.card?.title}(
  //                 {catagory?.card?.card?.itemCards.length})
  //               </div>
  //               <div className={showCatagoryItems ? "p-4 rotate-180" : "p-4"}>
  //                 ⮟
  //               </div>
  //             </div>
  //             <div> */}

  //                 <RestaurantCatagories
  //                   key={catagory?.card?.card?.id}
  //                   data={catagory?.card?.card?.itemCards}
  //                   showItem = {showIndex === index ?true : false}
  //                   setShowIndex = {() =>setShowIndex(index)}
  //                   index={showIndex}
  //                   dummy = {dummy}
  //                 />

  //             {/* </div>
  //             <div></div> */}
  //           </div>
  //         ))}
  //       </div> */}
  //     </div>
  //   );
  // };
};
export default RestaurantMenu;
