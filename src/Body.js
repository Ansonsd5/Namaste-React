import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  

  const fetchData = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.000761&lng=74.8185446&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await response.json();
      const requiredData =
        jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurant(requiredData);
      setFilteredRestaurant(requiredData);
    }


  const handleSearchText = () => {
    const filteredRestaurant = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  

  return  listOfRestaurant.length ===0  ? <Shimmer />: (
    <div className="bodyWrapper">
    
      <div className="searchBoxWrapper">
        <div className="search">
          <input
            className="searchBox"
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value), handleSearchText();
            }}
            value={searchText}
          />
          <button onClick={handleSearchText}>search</button>
        </div>
      </div>
      <div className="restaurantWrapper">
        {filteredRestaurant && filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} /> 
        )) }
      </div>
    </div>
  );
};
