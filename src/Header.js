import React, { useState } from "react";
import heroiconImage from '../assets/images/heroicon.png';


export const Header = () => {
  const [isLogin,setIsLogin] = useState(false);
  const handleLogin = () =>{
   if (isLogin) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
  }
return   <div className="headerWrapper">
    <div className="logoWrapper">
      <img src={heroiconImage} />
    </div>
    <div className="navLinkWrapper">
      <div className="linkContainer">
        <ul className="unOrderedList">
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Conatct Us</li>
          <li><button onClick={handleLogin}>{isLogin? "Logout" :"Login" }</button></li>
        </ul>
      </div>
      
    </div>
  </div>
};
