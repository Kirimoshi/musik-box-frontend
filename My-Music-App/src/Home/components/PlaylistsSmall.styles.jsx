import styled from "styled-components";

const cardWidth = 168; //px
const cardHeight = 270; //px
const coverHeight = 182; //px
const descHeight = 20; //px

const descrLineHeight = 20; //px
const descrMinLines = 1;
const descrMaxLines = 3;
const moreLessiconSize = 24; //px

const transitiontype = "0.2s ease-in-out";

export const PlaylistContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(6, ${cardWidth}px);
  gap: 24px;
  justify-content: space-between; // TODO implement same for Popular, gap gives us min-width-gap beteween cards space-between force containers to be equal width
  margin: 8px 0 12px;
`;

export const PlaylistCard = styled.figure`
  /* outline: 1px solid red; */
  width: ${cardWidth}px;
  height: ${cardHeight}px;
  font-family: "Roboto", sans-serif;

  display: grid;
  /* grid-template-rows: ${coverHeight}px 24px 24px ${descHeight}px; */
  grid-template-rows: ${({ $isExpanded }) =>
    $isExpanded
      ? `${coverHeight - descrLineHeight * descrMaxLines}px 24px 24px ${
          descrLineHeight * descrMaxLines
        }px`
      : `${coverHeight}px 24px 24px ${descrLineHeight * descrMinLines}px`};
  grid-template-columns: 1fr ${moreLessiconSize}px;
  align-content: space-between;
  grid-template-areas:
    "cover cover"
    "title title"
    "owner moreLessIcon"
    "description description";

  overflow: hidden;
  transition: grid-template-rows ${transitiontype};
`;
export const Cover = styled.div`
  transition: height ${transitiontype};
  position: relative; //for the icon

  grid-area: cover;
  width: 100%;
  height: ${({ $isExpanded }) =>
    $isExpanded
      ? coverHeight - descrLineHeight * descrMaxLines
      : coverHeight}px;

  background-image: url(${({ $coverUrl }) => $coverUrl}),
    linear-gradient(lightgray, lightgray);
  background-position: center, 50%;
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;

  border-radius: 18px;
  margin-bottom: 12px;
`;

//TODO: rename to h4 also in Popular
export const CardTitle = styled.h4`
  grid-area: title;
  color: var(--m-3-ref-neutral-neutral-100, #fff);
  /* M3/title/medium */
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  margin-bottom: 4px;
`;
export const CardOwner = styled.p`
  grid-area: owner;
  color: var(--m-3-ref-neutral-neutral-100, #fff);
  /* M3/body/large */
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`;
export const CardDescription = styled.p`
  grid-area: description;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) =>
    props.$isExpanded ? descrMaxLines : descrMinLines};
  -webkit-box-orient: vertical;
  overflow: hidden;

  color: var(--m-3-ref-neutral-neutral-70, #aea9b1);
  /* M3/label/large */
  font-size: 14px;
  font-weight: 500;
  line-height: ${descrLineHeight}px;
  letter-spacing: 0.1px;
`;
export const DescriptionCTA = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--m-3-ref-neutral-neutral-70, #aea9b1);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  grid-area: moreLessIcon;
`;
