import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user.selector";

import { MenuContainer, MenuItem, MenuLink } from "./SidebarMenu.styles";

function SidebarMenu({ menuObject }) {
  const { isAuthenticated: isAuth } = useSelector(userSelector);

  const [highlightedButton, setHighlightedButton] = useState(null);
  const handleClick = (index) => {
    setHighlightedButton(index);
  };
  return (
    <MenuContainer>
      <ul>
        {menuObject
          ?.filter(
            (menuItem) => menuItem.isAuthOnly === isAuth || !menuItem.isAuthOnly // auth user must see all menu items
          )
          .map((menuItem, index) => (
            <MenuItem key={menuItem.id}>
              <MenuLink
                data-highlighted={highlightedButton === index}
                onClick={() => handleClick(index)}
                to={menuItem.path}
              >
                <i>{menuItem.icon}</i>
                <span>{menuItem.name}</span>
              </MenuLink>
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
