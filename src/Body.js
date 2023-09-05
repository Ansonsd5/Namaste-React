import React, { useState, useEffect } from "react";
import RestaurantCard, {RestaurantCardWithLable} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link, Params, useParams } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

export const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const isOnline = useOnlineStatus();
 const RestaurantCardPromoted =RestaurantCardWithLable(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);



  
    const fetchData = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await response.json();
     
          const requiredData = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setListOfRestaurant(requiredData);
      setFilteredRestaurant(requiredData);
    }

  const handleSearchText = () => {
    
    const filteredRestaurant = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  return  filteredRestaurant.length === 0  ? <Shimmer />: (
    <div className="p-5 bg-primaryBg">
      <div className="flex">
        <div className="p-4 pl-0 flex gap-4 items-center ">
          <input
            className="p-1 rounded-md mr-6"
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button className="bg-primary text-btnTextColor pr-6 pl-6 pt-1 pb-1 rounded-md" onClick={handleSearchText}>search</button>
          {<div className={isOnline?"bg-green-500 h-4 w-4 rounded-full":"bg-red-600 h-4 w-4 rounded-full"}></div>}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        { filteredRestaurant.map((restaurant) => (
         <Link className="linkWrapper"  key={restaurant.info.id} to={"restaurant/"+`${restaurant.info.id}`}>{restaurant.info.avgRatingString >4.2 ? <RestaurantCardPromoted resData={restaurant}/> :<RestaurantCard resData={restaurant} /> }</Link> 
        )) }
      </div>
    </div>
  );
};
