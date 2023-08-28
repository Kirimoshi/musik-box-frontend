import styled from "styled-components";

import { footerHeight } from "../Home.styles";

const containerPaddingLeft = 80;
const containerPaddingRight = 112;
const containerPaddingTop = 56;

export const MainContainer = styled.div`
  padding-left: ${containerPaddingLeft}px;
  padding-right: ${containerPaddingRight}px;
  padding-top: ${containerPaddingTop}px;
  background: var(--m-3-ref-primary-primary-0, #000);
  height: max-content;
  min-height: calc(100vh - ${footerHeight}px);
  background-image: radial-gradient(
      50% 50% at 50% 50%,
      #293755 0%,
      #0d1927 100%
    ),
    linear-gradient(180deg, #170d2e 0%, #1f192e 100%);
`;
