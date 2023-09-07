import styled from "styled-components";

import {
  BasePlaylistsContainer,
  Subtitle,
  Title,
  oneLineEllipsis,
} from "../../../shared/Shared.styles";

const likeSize = 52;
const cardWidth = 264;
const cardHeight = 288;
const moreHeight = 16;
const descrLineHeight = 20;
const descrMinLines = 3;
const descrMaxLines = 6;
const descrFontSize = 14;
const descrBgColor = "rgba(191, 129, 173, 0.5)";
const cardPadd = {
  top: 22,
  right: 13,
  bottom: 20,
  left: 19,
};
const descPadd = {
  top: 13,
  right: 19,
  bottom: 20,
  left: 19,
};
const descrVertPaddSum = descPadd.top + descPadd.bottom;

export const PlaylistsTitle = styled(Title)`
  margin-bottom: 12px;
`;

export const PlaylistsSubtitle = styled(Subtitle)`
  margin-bottom: 8px;
`;

export const PlaylistsContainer = styled(BasePlaylistsContainer)`
  grid-template-columns: repeat(4, ${cardWidth}px);
  height: ${cardHeight}px;
`;

export const PlaylistCard = styled.figure`
  width: ${cardWidth}px;
  height: ${cardHeight}px;
  border-radius: 18px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.$coverUrl}), linear-gradient(lightgray, lightgray);
  background-position: center, center, 50%;
  background-size: cover, cover, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  display: grid;
  grid-template-rows: ${likeSize}px auto ${moreHeight}px ${({ $isExpanded }) =>
      $isExpanded
        ? descrLineHeight * descrMaxLines + descrVertPaddSum
        : descrLineHeight * descrMinLines + descrVertPaddSum}px;
  grid-template-columns: auto ${likeSize}px;
  grid-template-areas:
    "name like"
    "owner owner"
    "more none"
    "description description";
  align-items: center;
  transition: grid-template-rows 0.2s ease-in-out;
  font-family: "Roboto", sans-serif;
  overflow: hidden;
`;

export const CardTitle = styled.h4`
  grid-area: name;
  color: var(--m-3-white, #fff);
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-transform: capitalize;
  padding-top: ${cardPadd.top}px;
  padding-left: ${cardPadd.left}px;
  ${oneLineEllipsis}
`;

export const CardLike = styled.div`
  grid-area: like;
  width: ${likeSize}px;
  height: ${likeSize}px;
  padding: 9.818px;
  padding-top: ${cardPadd.top}px;
  padding-right: ${cardPadd.right}px;

  & > svg {
    height: 32.7px;
    width: 32.7px;
  }
`;

export const CardOwner = styled.div`
  grid-area: owner;
  align-self: start;
  padding-top: 6.64px;
  padding-left: ${cardPadd.left}px;
  color: var(--m-3-white, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  ${oneLineEllipsis}
`;

export const CardDescription = styled.div`
  grid-area: description;
  padding: ${descPadd.top}px ${descPadd.right}px ${descPadd.bottom}px
    ${descPadd.left}px;
  height: 100%;
  border-radius: 0px 0px 18px 18px;
  background: ${descrBgColor};
  align-self: end;
  & > p {
    display: -webkit-box;
    -webkit-line-clamp: ${({ $isExpanded }) =>
      $isExpanded ? descrMaxLines : descrMinLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: var(--m-3-white, #fff);
    text-align: center;
    font-size: ${descrFontSize}px;
    font-style: normal;
    font-weight: 500;
    line-height: ${descrLineHeight}px;
    letter-spacing: 0.1px;
  }
`;

export const DescriptionCTA = styled.span`
  cursor: pointer;
  border-bottom: 16px solid ${descrBgColor};
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  height: 0;
  width: 40%;
  text-align: center;
  color: var(--m-3-white, #fff);
  text-align: center;
  font-size: ${descrFontSize}px;
  font-style: normal;
  font-weight: 300;
  line-height: ${descrLineHeight}px;
  letter-spacing: 0.1px;
  grid-area: more;
`;
