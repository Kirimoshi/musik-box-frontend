import styled from "styled-components";

export const MenuContainer = styled.div`
  margin: 5px 0px;
  position: relative;
`;

export const MenuItem = styled.li`
  // TODO somewhere in styles we have styled li, mb this is a good place to write
  // all: unset;
  height: 45px;
  color: white;
  display: flex;
  align-items: center;
  padding: 5px;

  & > a {
    text-decoration: none;
  }
  & > a[data-highlighted="true"] {
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
