import React from "react";
import MenuItem from "./MenuItem";
import "./style.css";

function MenuList({ list = [] }) {
  return (
    <div>
      <ul className="menu-list-container">
        {list && list.length > 0
          ? list.map((listItem) => <MenuItem item={listItem} />)
          : null}
      </ul>
    </div>
  );
}

export default MenuList;
