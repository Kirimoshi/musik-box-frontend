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

export const BasePlaylistsContainer = styled.section`
  display: grid;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 12px;
`;

export const Loader = styled.div`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: "";
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid #fff;
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 2s linear infinite;
  }
  &::after {
    animation-delay: 1s;
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
