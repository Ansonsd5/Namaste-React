import React from "react";
import heroiconImage from '../assets/images/heroicon.png';


export const Header = () => (
  <div className="headerWrapper">
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
        </ul>
      </div>
      
    </div>
  </div>
);
