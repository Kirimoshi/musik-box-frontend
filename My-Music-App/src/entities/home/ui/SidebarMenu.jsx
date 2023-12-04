import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../../store/user/user.selector';

import { MenuContainer, MenuItem, MenuLink } from './SidebarMenu.styles';
import { numOfRecivedFriendRequestsSelector } from '../../../store/friends/friends.selector';
import { fetchFriendsRecived } from '../../../store/friends/friends.thunks';

function SidebarMenu({ menuObject }) {
  const dispatch = useDispatch();
  const { isAuthenticated: isAuth } = useSelector(userSelector);
  const numOfRecivedFriendRequests = useSelector(
    numOfRecivedFriendRequestsSelector
  );

  useEffect(() => {
    if (isAuth) dispatch(fetchFriendsRecived());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  const [highlightedButton, setHighlightedButton] = useState(null);
  const handleClick = (index) => () => {
    setHighlightedButton(index);
  };
  return (
    <MenuContainer className='sidebar-menu'>
      <ul className='sidebar-menu__wrapper'>
        {menuObject
          ?.filter(
            (menuItem) => menuItem.isAuthOnly === isAuth || !menuItem.isAuthOnly
          )
          .map(({ id, path, icon, name, shoudRenderCounter }, index) => {
            return (
              <MenuItem
                key={id}
                className='sidebar-menu__item'
                data-menu-name={name.toLowerCase().replace(/\s/g, '-')}
              >
                <MenuLink
                  data-highlighted={highlightedButton === index}
                  onClick={handleClick(index)}
                  to={path}
                  className='sidebar-menu__link link__wrapper'
                >
                  <span className='link__icon'>{icon}</span>
                  <span className='link__text'>{name}</span>
                  {shoudRenderCounter && (
                    <span className='link__counter'>
                      {numOfRecivedFriendRequests ?? 0}
                    </span>
                  )}
                </MenuLink>
              </MenuItem>
            );
          })}
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
