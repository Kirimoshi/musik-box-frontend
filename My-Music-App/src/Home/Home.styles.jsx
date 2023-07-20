import styled from "styled-components";

const footerHeight = "64px";
const sidebarWidth = "360px";

export const HomeContainer = styled.div`
  max-width: 1680px;
  /* width: max-content; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${sidebarWidth} auto;
  grid-template-rows: auto 64px;
  grid-template-areas:
    "sidebar main"
    "footer footer";
`;

export const SidebarContainer = styled.aside`
  grid-area: sidebar;
  outline: 1px solid red;
  min-height: calc(100vh - ${footerHeight});
`;

export const MainContainer = styled.main`
  grid-area: main;
  outline: 1px solid blue;
`;

export const FooterContainer = styled.footer`
  grid-area: footer;
  outline: 1px solid green;
`;
