import styled from "styled-components";

export const footerHeight = "64";
export const sidebarWidth = "360";

export const HomeContainer = styled.div`
  max-width: 1680px;
  /* width: max-content; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${sidebarWidth}px auto;
  grid-template-rows: auto ${footerHeight}px;
  grid-template-areas:
    "sidebar main"
    "footer footer";
`;

export const SidebarContainer = styled.aside`
  grid-area: sidebar;
  min-height: calc(100vh - ${footerHeight}px);
`;

export const MainContainer = styled.main`
  grid-area: main;
`;

export const FooterContainer = styled.footer`
  grid-area: footer;
  max-height: ${footerHeight}px;
  height: ${footerHeight}px;
`;
