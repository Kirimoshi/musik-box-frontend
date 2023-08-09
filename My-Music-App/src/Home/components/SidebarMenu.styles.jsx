import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
  margin: 5px 0px;
  position: relative;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;

  &[data-highlighted="true"] {
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
