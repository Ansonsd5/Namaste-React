import React from "react";
import food from "./assets/images/foodImg.png";


const resData = {
  
      "info": {
          "id": "431257",
          "name": "Cupcake Bliss Cake & Desserts",
          "cloudinaryImageId": "40f193d8b23afb2988489dac1258962f",
          "locality": "MRPL Road",
          "areaName": "Surathkal",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Bakery",
              "Desserts",
              "Ice Cream",
              "Beverages"
          ],
          "avgRating": 3.6,
          "feeDetails": {
              "restaurantId": "431257",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4300
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4300
          },
          "parentId": "66732",
          "avgRatingString": "3.6",
          "totalRatingsString": "50+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 7.1,
              "serviceability": "SERVICEABLE",
              "slaString": "34 mins",
              "lastMileTravelString": "7.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextOpenTimeMessage": "Opens next at 9 am, tomorrow"
          },
          "badges": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "ABOVE ₹800",
              "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      }
      
  }

const RestaurantCard = (props) => {
  const {resData} = props;
  const {name,cuisines,cloudinaryImageId,avgRatingString} = resData?.info
 return <div className="restaurantCard">
    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
    <div className="restaurantName">{name}</div>
    <div className="dishName">{cuisines.join(",")}</div>
    <div className="ratings">{avgRatingString}</div>
  </div>
};

export const Body = () => (
  <div className="bodyWrapper">
    <div className="search">Search</div>
    <div className="restaurantWrapper">
      <RestaurantCard resData = {resData}/>
      <RestaurantCard resData = {resData}/>
      <RestaurantCard resData = {resData}/>
      <RestaurantCard resData = {resData}/>

     
      
    </div>
  </div>
);
