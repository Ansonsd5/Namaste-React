import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log(resInfo, "resInfo");

  return (
    <>
      {resInfo ? (
        <div className="menuListWrapper">
          <h3>{resInfo.name}</h3>
          <h4>List of Iters</h4>
          <div>{resInfo.avgRating}</div>
          <hr></hr>
          <div>{resInfo.costForTwoMessage}</div>
        </div>
      ) : (
        <div>Some Things is wrong... we will be back</div>
      )}
    </>
  );
};

export default RestaurantMenu;
