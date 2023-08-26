import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const responseData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.000761&lng=74.8185446&restaurantId=" +
        `${resId}`
    );
    const jsonResponse = await responseData.json();
  setResInfo(jsonResponse?.data?.cards[0]?.card?.card?.info)
  };
  return resInfo;
};

export default useRestaurantMenu;
