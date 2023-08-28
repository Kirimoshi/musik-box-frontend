import styled, { css } from "styled-components";

export const oneLineEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Title = styled.h2`
  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 127.273% */
`;

export const Subtitle = styled.h3`
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const BasePlaylistsContainer = styled.section`
  display: grid;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 12px;
`;
