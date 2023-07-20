import styled from "styled-components";

export const SidebarContainer = styled.div`
  /* width: 258px; */
  /* height: 100%; */
  background: #010f19;
  padding: 15px 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Logo = styled.div`
  padding: 5px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 20px;
  line-height: 28px;
`;

export const Divider = styled.hr`
  width: 93%;
`;

export const Accout = styled.div`
  height: 65px;
  display: flex;
  flex-direction: row;
  background: #4f378b;
  border-radius: 18px;
  position: relative;
  padding: 5px 0px;
`;
