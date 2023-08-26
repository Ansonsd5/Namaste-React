import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
 

  const { resId } = useParams();
 

  const resInfo = useRestaurantMenu(resId);
  
  
  console.log(resInfo, "resInfo");
  // console.log(menuItem, "menuItem");
  return (
    <>
      {resInfo ? (
        <div className="menuListWrapper">
          <h3>{resInfo.name}</h3>
          <h4>List of Iters</h4>
          <div>{resInfo.avgRating}</div>
          <hr></hr>
          <div>{resInfo.costForTwoMessage}</div>
          <div className="flatDealWrapper">
            {/* <div className="menuItemGrid">
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
            </div> */}
          </div>
        </div>
      ) : (
        <div>Some Things is wrong... we will be back</div>
      )}
    </>
  );
};

export default RestaurantMenu;
