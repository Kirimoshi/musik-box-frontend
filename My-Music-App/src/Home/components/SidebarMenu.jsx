// reenable after we have links to the pages
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

function SidebarMenu({ menuObject }) {
  const [highlightedButton, setHighlightedButton] = useState(null);
  const handleClick = (index) => {
    setHighlightedButton(index);
  };
  return (
    <div className="MenuContainer">
      <ul>
        {menuObject?.map((li, index) => (
          <li key={String(Symbol(index))}>
            <a
              href="#"
              className={
                highlightedButton === index ? "highlighted-button" : ""
              }
              onClick={() => handleClick(index)}
            >
              <i className="list_icon">{li.icon}</i>
              <span className="list_name">{li.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarMenu;
