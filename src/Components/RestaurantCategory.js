import React, { useState } from "react";
import ListItems from "./ListItems";

const RestaurantCategory = ({ data,showitems,setShowIndex }) => {

    // const [ showList, setShowList] = useState(false);
  // const handleAccordian = () =>{
  //   setShowList(!showList)
  // }

  const handleClick= () =>{
    setShowIndex();
  }
 
  return (
    <div className="drop-shadow-2xl">
      <div className="bg-primaryBg flex justify-between px-8  align-middle" onClick={handleClick}>
      {/* onClick={handleAccordian} */}
        <div className="font-bold text-x p-3 cursor-pointer">{data?.title}({data.itemCards.length})</div>
        <div className={true ? "p-3 cursor-pointer": "p-3 rotate-180 text-slate-900 cursor-pointer"}>⮟</div>
      </div>
      {showitems && <ListItems items = {data.itemCards}/>}
    </div>
  );
};
export default RestaurantCategory;
