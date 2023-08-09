import React, { useState } from "react";
import PropTypes from "prop-types";

import { MenuContainer, MenuItem } from "./SidebarMenu.styles";

function SidebarMenu({ menuObject }) {
  const isAuth = false;

  const [highlightedButton, setHighlightedButton] = useState(null);
  const handleClick = (index) => {
    setHighlightedButton(index);
  };
  return (
    <MenuContainer>
      <ul>
        {menuObject?.map((menuItem, index) => (
          <MenuItem key={menuItem.id}>
            <a
              data-highlighted={highlightedButton === index}
              href="#"
              onClick={() => handleClick(index)}
            >
              <i>{menuItem.icon}</i>
              <span>{menuItem.name}</span>
            </a>
          </MenuItem>
        ))}
      </ul>
    </MenuContainer>
  );
}

SidebarMenu.propTypes = {
  menuObject: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.element.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default SidebarMenu;
