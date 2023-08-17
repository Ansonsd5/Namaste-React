import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const RestaurantMenu = () =>{
useEffect(()=>{
    resMenuData();
},[]);

const {resId} =useParams();
console.log(resId,"params");
const [menuData, setMenuData] = useState([]);
const [menuItem,setMenuItem] = useState([]);

        const resMenuData = async () =>{
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.000761&lng=74.8185446&restaurantId="+`${resId}`);

            const jsonMenuData = await data.json();
            setMenuData(jsonMenuData?.data?.cards[0]?.card?.card?.info);
            setMenuItem(jsonMenuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
            
        }
    console.log(menuData,"menuData");
    console.log(menuItem,"menuItem");
    return <div className="menuListWrapper">
        
        <h3>{menuData.name}</h3>
        <h4>List of Iters</h4>
        <div>{menuData.avgRating}</div>
        <hr></hr>
        <div>{menuData.costForTwoMessage}</div>
        <div className="flatDealWrapper">
            <div>{menuItem.map((item)=><div><h5>{item.card.info.name}</h5><p>{item.card.info.price/100}</p><img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+item.card.info.imageId}/> <p>{item.card.info.description}</p></div>)}</div>
        </div>
    </div>
}

export default RestaurantMenu;