import React from "react";

const ListItems = ({ items }) => {
  return (
    <div>
      {items?.map((item) => (
        <div key={item?.info?.id}>{item?.info?.name}</div>
      ))}
    </div>
  );
};

export default ListItems;
