import React, { useContext, useState } from "react";
import heroiconImage from '../../assets/images/heroicon.png';
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";



export const Header = () => {
  const [isLogin,setIsLogin] = useState(false);

  const { loggedInUser } = useContext(UserContext);

  console.log(loggedInUser,"loggedIn User");
  // const handleLogin = () =>{
  //  if (isLogin) {
  //     setIsLogin(false)
  //   } else {
  //     setIsLogin(true)
  //   }
  // }
const cartItems = useSelector((store)=> store.cart.items )
  
return   <div className="flex align-middle justify-between">
    <div className="h-40 w-40">
      <img src={heroiconImage} />
    </div>
    <div className="flex pr-5 font-medium w-auto  items-center">
      <div className="flex">
        <ul className="flex gap-2">
          <li className="bg-primary pt-1 pr-4 pl-4 pb-1 text-btnTextColor rounded-md hover:bg-gray-900"><Link to={"/"}>Home</Link></li>
          <li className="bg-primary pt-1 pr-4 pl-4 pb-1 text-btnTextColor rounded-md hover:bg-gray-900"><Link to={"/grocery"}>Grocery Mart</Link></li>
          <li className="bg-primary pt-1 pr-4 pl-4 pb-1 text-btnTextColor rounded-md hover:bg-gray-900"><Link to={"/about"}>About Us</Link></li>
          <li className="bg-primary pt-1 pr-4 pl-4 pb-1 text-btnTextColor rounded-md hover:bg-gray-900 text-xl"><Link to={"/cart"}>Cart ({cartItems.length} items)</Link></li>
          <li className="bg-primary pt-1 pr-4 pl-4 pb-1 text-btnTextColor rounded-md hover:bg-gray-900"><Link to={"contact"}>Conatct Us</Link></li>
          {/* <li><button onClick={handleLogin}>{isLogin? "Logout" :"Login" }</button></li> */}
          <li className="bg-primary pt-1 pr-4 pl-4 pb-1 text-btnTextColor rounded-md hover:bg-gray-900"><button onClick={() =>{isLogin ? setIsLogin(false): setIsLogin(true)}}>{isLogin? "Logout" :"Login" }</button></li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
      
    </div>
  </div>
};
