import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const RestaurantMenu = () =>{
useEffect(()=>{
    resMenuData();
},[]);

const {resId} =useParams();
console.log(resId,"params");
const [menuData, setMenuData] = useState([]);

        const resMenuData = async () =>{
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.000761&lng=74.8185446&restaurantId="+`${resId}`);

            const jsonMenuData = await data.json();
            setMenuData(jsonMenuData?.data?.cards[0]?.card?.card?.info);
            
        }
    console.log(menuData,"menuData");
    return <div className="menuListWrapper">
        
        <h3>{menuData.name}</h3>
        <h4>List of Iters</h4>
        <ul>
           <li>{menuData.costForTwoMessage}</li>
        </ul>
    </div>
}

export default RestaurantMenu;