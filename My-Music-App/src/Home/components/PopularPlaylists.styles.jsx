import styled from "styled-components";

export const PlaylistsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const likeSize = "52.364"; //px
const ownerHeight = "24"; //px
const descriptionHeight = "74.182"; //px
const cardWidth = "264"; //px
const cardHeight = "288"; //px
const moreHeight = "16"; //px
let maxLines = 2;

const padding = {
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
        ? Math.floor((descriptionHeight / 2) * 5)
        : descriptionHeight}px;
  grid-template-columns: auto ${likeSize}px;
  grid-template-areas:
    "name like"
    "owner owner"
    "none more"
    "description description";

  align-items: center;
  transition: grid-template-rows 0.3s ease-in-out;
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
  padding-top: ${padding.top}px;
  padding-left: ${padding.left}px;
`;

export const CardLike = styled.div`
  width: ${likeSize}px;
  height: ${likeSize}px;
  padding: 9.818px;
  grid-area: like;
  padding-top: ${padding.top}px;
  padding-right: ${padding.right}px;

  & > svg {
    height: 32.7px;
    width: 32.7px;
  }
`;

export const CardOwner = styled.div`
  grid-area: owner;
  align-self: start;
  padding-left: ${padding.left}px;
`;

export const CardDescription = styled.div`
  padding: 13.64px 19.64px 20.55px 19.64px;
  height: 100%;
  /* width: 100%; */
  grid-area: description;
  border-radius: 0px 0px 18px 18px;
  background: rgba(191, 129, 173, 0.5);
  align-self: end;
  /* text-align: center; */
  & > p {
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => (props.$isExpanded ? "5" : "2")};
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: var(--m-3-white, #fff);
    text-align: center;
    /* M3/label/large */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.1px;
  }
`;

export const CardShowMore = styled.span`
  grid-area: more;
  color: red;
  cursor: pointer;
`;
export const CardShowLess = styled.span`
  grid-area: more;
  color: green;
  cursor: pointer;
`;
