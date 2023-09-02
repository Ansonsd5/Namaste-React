import React, { useState } from "react";
import ListItems from "./ListItems";

const RestaurantCategory = ({ data }) => {

    const [ showList, setShowList] = useState(false);
  const handleAccordian = () =>{
    setShowList(!showList)
  }
  return (
    <div>
      <div className="bg-primaryBg flex justify-between px-4 mb-5 align-middle" onClick={handleAccordian}>
        <div className="font-bold text-x">{data?.title}({data.itemCards.length})</div>
        <div className={showList===false ? "": "rotate-180 text-slate-900"}>⮟</div>
      </div>
      {showList && <ListItems items = {data.itemCards}/>}
    </div>
  );
};
export default RestaurantCategory;
