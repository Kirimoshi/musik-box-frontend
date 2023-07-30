import styled from "styled-components";

export const Title = styled.h2`
  color: #fff;
  /* M3/title/large */
  font-family: Roboto, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 127.273% */
`;
export const Subtitle = styled.h3`
  color: #fff;
  /* M3/title/medium */
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
`;

export const BaseCarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BaseCarousel = styled.div``;

export const BaseCarouselItem = styled.div``;

export const BaseCarouselControls = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  & > span {
    display: block;
    padding: 12px;
    height: 48px;
    width: 48px;
    font-size: 24px;
  }
`;
