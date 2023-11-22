import styled, { css } from 'styled-components';

export const oneLineEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const flexHorizontalCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
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

export const Spacer = styled.div`
  ${({ $marginBottom }) =>
    !!$marginBottom && `margin-bottom: ${$marginBottom}px`};
  ${({ $marginTop }) => !!$marginTop && `margin-top: ${$marginTop}px`};
`;
