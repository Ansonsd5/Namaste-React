import React, { useState } from "react";
import ListItems from "./ListItems";

const RestaurantCategory = ({ data }) => {

    const [ showList, setShowList] = useState(false);
  const handleAccordian = () =>{
    setShowList(!showList)
  }
  return (
    <div className="drop-shadow-2xl">
      <div className="bg-primaryBg flex justify-between px-8  align-middle " onClick={handleAccordian}>
        <div className="font-bold text-x p-3">{data?.title}({data.itemCards.length})</div>
        <div className={showList===false ? "p-3": "p-3 rotate-180 text-slate-900"}>⮟</div>
      </div>
      {showList && <ListItems items = {data.itemCards}/>}
    </div>
  );
};
export default RestaurantCategory;
