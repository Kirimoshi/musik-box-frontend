import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuContainer = styled.nav`
  margin: 5px 0px;
  position: relative;

  & > ul {
    & > li {
      cursor: pointer;
    }
    // TODO: remove one by one when adding functionality for new menu items
    & > li:nth-child(2),
    & > li:nth-child(4) {
      cursor: not-allowed;
    }
  }
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  cursor: inherit;

  &.active {
    width: 180px;
    height: 45px;
    color: white;
    display: flex;
    align-items: center;
    padding: 5px;
    background: #030109;
    border: 1px solid #49454f;
    border-radius: 14px;
  }
`;

export const MenuItem = styled.li`
  height: 45px;
  color: white;
  display: flex;
  align-items: center;
  padding: 5px;

  & i {
    color: #e6e0e9;
  }
  & span {
    color: #e6e0e9;
    position: relative;
    left: 20px;
    font-family: "Roboto", sans-serif;
    font-size: 13px;
  }
`;
