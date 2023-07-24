// reenable after we have links to the pages
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PropTypes from "prop-types";

import { MenuContainer, MenuItem } from "./SidebarMenu.styles";

function SidebarMenu({ menuObject }) {
  const [highlightedButton, setHighlightedButton] = useState(null);
  const handleClick = (index) => {
    setHighlightedButton(index);
  };
  return (
    <MenuContainer>
      <ul>
        {menuObject?.map((li, index) => (
          <MenuItem key={String(Symbol(index))}>
            <a
              data-highlighted={highlightedButton === index}
              href="#"
              onClick={() => handleClick(index)}
            >
              <i>{li.icon}</i>
              <span>{li.name}</span>
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
