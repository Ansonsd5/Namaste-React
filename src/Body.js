import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link, Params, useParams } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

export const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  
    const fetchData = async () => {
      const response = await fetch(
        "https://www.swiggy.com/api/seo/getListing?lat=12.960059122809971&lng=77.57337538383284"
      );
      const jsonData = await response.json();
      // const requiredData =
      //   jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants;
          const requiredData = jsonData?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setListOfRestaurant(requiredData);
      setFilteredRestaurant(requiredData);
    }

  const handleSearchText = () => {
    
    const filteredRestaurant = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

 console.log(Params,"params");
  return  filteredRestaurant.length === 0  ? <Shimmer />: (
    <div className="bodyWrapper">
      <div className="searchBoxWrapper">
        <div className="search">
          <input
            className="searchBox"
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button onClick={handleSearchText}>search</button>
<div>{isOnline ? <div>online</div> :<div>offline</div>}</div>
        </div>
      </div>
      <div className="restaurantWrapper">
        { filteredRestaurant.map((restaurant) => (
         <Link className="linkWrapper"  key={restaurant.info.id} to={"restaurant/"+`${restaurant.info.id}`}><RestaurantCard resData={restaurant} /> </Link> 
        )) }
      </div>
    </div>
  );
};
