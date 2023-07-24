import styled from "styled-components";

import { footerHeight } from "../Home.styles";

const containerPaddingLeft = 80; // px
const containerPaddingRight = 112; // px
const containerPaddingTop = 56; // px

export const MainContainer = styled.div`
  padding-left: ${containerPaddingLeft}px;
  padding-right: ${containerPaddingRight}px;
  padding-top: ${containerPaddingTop}px;
  background: var(--m-3-ref-primary-primary-0, #000);
  height: max-content;
  min-height: calc(100vh - ${footerHeight}px);
`;
