import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";

const RestaurantMenu = () => {
  useEffect(() => {
    resMenuData();
  }, []);

  const { resId } = useParams();
  console.log(resId, "params");
  const [menuData, setMenuData] = useState([]);
  const [menuItem, setMenuItem] = useState([]);

  const resMenuData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.000761&lng=74.8185446&restaurantId=" +
        `${resId}`
    );

    const jsonMenuData = await data.json();
    setMenuData(jsonMenuData?.data?.cards[0]?.card?.card?.info);
    setMenuItem(
      jsonMenuData?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
  };
  console.log(menuData, "menuData");
  console.log(menuItem, "menuItem");
  return (
    <>
      {menuItem ? (
        <div className="menuListWrapper">
          <h3>{menuData.name}</h3>
          <h4>List of Iters</h4>
          <div>{menuData.avgRating}</div>
          <hr></hr>
          <div>{menuData.costForTwoMessage}</div>
          <div className="flatDealWrapper">
            <div className="menuItemGrid">
              {menuItem.map((item) => (
                <div className="menuList" key={item.card.info.id}>
                  <h5>{item.card.info.name}</h5>
                  
                  <img className="menuItemImg"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                      item.card.info.imageId
                    }
                  />{" "}
                  <p>₹{item.card.info.price / 100}</p>
                  <p className="dishDiscription">{item.card.info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Some Things is wrong... we will be back</div>
      )}
    </>
  );
};

export default RestaurantMenu;
