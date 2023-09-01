import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const responseData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        `${resId}`
    );
    const jsonResponse = await responseData.json();
  setResInfo(jsonResponse?.data)
  // console.log(jsonResponse?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR,"dffffffffffff");
  };
  return resInfo;
};

export default useRestaurantMenu;
