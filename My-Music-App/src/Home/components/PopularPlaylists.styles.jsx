import styled, { css } from "styled-components";

export const PlaylistsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

const likeSize = "52.364"; //px
const ownerHeight = "24"; //px
const descriptionHeight = "74.182"; //px
const cardWidth = "264"; //px
const cardHeight = "288"; //px
const moreHeight = "16"; //px
const descrLineHeight = "20"; //px
const descrMinLines = 3;
const descrMaxLines = 6;
const descrVersPaddSum = 34.19; //px

const cardPadding = {
  top: "22.64",
  right: "13.09",
  bottom: "20.55",
  left: "19.64",
};

export const PlaylistCard = styled.figure`
  width: ${cardWidth}px;
  height: ${cardHeight}px;

  border-radius: 18px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.$coverUrl}), linear-gradient(lightgray, lightgray);
  background-position: center, center, 50%;
  background-size: cover, cover, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;

  padding: 0;

  font-family: "Roboto", sans-serif;

  display: grid;
  grid-template-rows: ${likeSize}px auto ${moreHeight}px ${(props) =>
      props.$isExpanded
        ? descrLineHeight * descrMaxLines + descrVersPaddSum
        : descrLineHeight * descrMinLines + descrVersPaddSum}px;
  grid-template-columns: auto ${likeSize}px;
  grid-template-areas:
    "name like"
    "owner owner"
    "more none"
    "description description";

  align-items: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;

export const CardTitle = styled.h3`
  grid-area: name;
  color: var(--m-3-white, #fff);
  /* M3/headline/medium */
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 128.571% */
  text-transform: capitalize;
  padding-top: ${cardPadding.top}px;
  padding-left: ${cardPadding.left}px;
`;

export const CardLike = styled.div`
  width: ${likeSize}px;
  height: ${likeSize}px;
  padding: 9.818px;
  grid-area: like;
  padding-top: ${cardPadding.top}px;
  padding-right: ${cardPadding.right}px;

  & > svg {
    height: 32.7px;
    width: 32.7px;
  }
`;

export const CardOwner = styled.div`
  grid-area: owner;
  align-self: start;
  padding-top: 6.64px;
  padding-left: ${cardPadding.left}px;

  color: var(--m-3-white, #fff);
  /* M3/title/medium */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
`;

const descrFontSize = "14"; //px // need to sync height of fonts with trapezoid height
const descrBgColor = "rgba(191, 129, 173, 0.5)";

export const CardDescription = styled.div`
  padding: 13.64px 19.64px 20.55px 19.64px;
  height: 100%;
  /* width: 100%; */
  grid-area: description;
  border-radius: 0px 0px 18px 18px;
  background: ${descrBgColor};
  align-self: end;
  /* text-align: center; */
  & > p {
    display: -webkit-box;
    -webkit-line-clamp: ${(props) =>
      props.$isExpanded ? descrMaxLines : descrMinLines};
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: var(--m-3-white, #fff);
    text-align: center;
    /* M3/label/large */
    font-size: ${descrFontSize}px;
    font-style: normal;
    font-weight: 500;
    line-height: ${descrLineHeight}px;
    letter-spacing: 0.1px;
  }
`;

const moreLessCommon = css`
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

export const CardShowMore = styled.span`
  ${moreLessCommon}
`;
export const CardShowLess = styled.span`
  ${moreLessCommon}
`;
