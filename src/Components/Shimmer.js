import React from "react";

export default Shimmer = () =>{
    const listItems = [1,2,3,4,5,6,7,8,9,10];
    return <>
    <div className="shimmerWrapper">
       { listItems.map((ele)=><div key={ele} className="shimmerCards">{" "}</div>)}
    </div>
    </>
}