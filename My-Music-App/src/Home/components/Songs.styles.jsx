import styled from "styled-components";

import {
  BaseCarouselContainer,
  BaseCarousel,
  BaseCarouselItem,
} from "../Shared.styles";

export const SongsContainer = styled.section`
  outline: 1px solid white;
`;

export const SongsCarouselContainer = styled(BaseCarouselContainer)`
  margin-top: 12px;
  margin-bottom: 12px;
`;
export const SongsCarousel = styled(BaseCarousel)``;
export const SongsCarouselItem = styled(BaseCarouselItem)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 288px;
`;
