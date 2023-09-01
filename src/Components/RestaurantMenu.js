import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagories from "./RestaurantCatagories";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const restaurantName = resInfo?.cards[0]?.card?.card?.info?.name;
  // console.log(resInfo?.cards[0]?.card?.card?.info?.name, "resInfo");

  const requiredDataForMenu =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cata) =>
        cata?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(requiredDataForMenu, "requiredDataForMenu");

  return (
    <div>
      {/* Restaurant Name */}
      <div className="font-bold text-xxl text-center">{restaurantName}</div>
      <div className="p-10">
        {requiredDataForMenu?.map((catagory, index) => (<div>
          <div className="flex justify-around bg-primaryBg py-4 my-3" key={catagory?.card?.card.title} >
            <div className="w-9/12">{catagory?.card?.card.title}</div>
            <div>⮟</div>
            </div>
            <div className="flex">
            <RestaurantCatagories data={catagory?.card?.card?.itemCards}/>
          </div>
          <div></div>
        </div>))}
        {/* <ItemCategory key={"ddddd"+restaurantName} cataData ={requiredDataForMenu}/> */}
      </div>

      {/* Accordian */}
    </div>
  );
};

export default RestaurantMenu;
