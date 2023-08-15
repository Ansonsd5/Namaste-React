import React, { useState } from "react";
import heroiconImage from '../assets/images/heroicon.png';
import { Link } from "react-router-dom";


export const Header = () => {
  const [isLogin,setIsLogin] = useState(false);
  // const handleLogin = () =>{
  //  if (isLogin) {
  //     setIsLogin(false)
  //   } else {
  //     setIsLogin(true)
  //   }
  // }
return   <div className="headerWrapper">
    <div className="logoWrapper">
      <img src={heroiconImage} />
    </div>
    <div className="navLinkWrapper">
      <div className="linkContainer">
        <ul className="unOrderedList">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/cart"}>Cart</Link></li>
          <li><Link to={"contact"}>Conatct Us</Link></li>
          {/* <li><button onClick={handleLogin}>{isLogin? "Logout" :"Login" }</button></li> */}
          <li><button onClick={() =>{isLogin ? setIsLogin(false): setIsLogin(true)}}>{isLogin? "Logout" :"Login" }</button></li>
        </ul>
      </div>
      
    </div>
  </div>
};
