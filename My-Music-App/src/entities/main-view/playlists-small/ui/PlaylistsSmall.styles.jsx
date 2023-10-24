import styled from 'styled-components';
import {
  BasePlaylistsContainer,
  oneLineEllipsis,
} from '../../../../shared/Shared.styles';

const cardWidth = 168;
const cardHeight = 270;
const coverHeight = 182;
const descrLineHeight = 20;
const moreLessiconSize = 24;
const descrMinLines = 1;
const descrMaxLines = 3;
const transitionType = '0.2s ease-in-out';

export const PlaylistContainer = styled(BasePlaylistsContainer)`
  grid-template-columns: repeat(6, ${cardWidth}px);
  margin-top: 8px;
  height: ${cardHeight}px;
`;

export const PlaylistCard = styled.figure`
  width: ${cardWidth}px;
  height: ${cardHeight}px;
  font-family: 'Roboto', sans-serif;
  display: grid;
  grid-template-rows: ${({ $isExpanded }) =>
    $isExpanded
      ? `${coverHeight - descrLineHeight * descrMaxLines}px 24px 24px ${
          descrLineHeight * descrMaxLines
        }px`
      : `${coverHeight}px 24px 24px ${descrLineHeight * descrMinLines}px`};
  grid-template-columns: auto ${moreLessiconSize}px;
  align-content: space-between;
  grid-template-areas:
    'cover cover'
    'title title'
    'owner moreLessIcon'
    'description description';
  overflow: hidden;
  transition: grid-template-rows ${transitionType};
`;

export const Cover = styled.div`
  grid-area: cover;
  border-radius: 18px;
  height: ${({ $isExpanded }) =>
    $isExpanded
      ? coverHeight - descrLineHeight * descrMaxLines
      : coverHeight}px;
  transition: height ${transitionType};
  background-image: url(${({ $coverUrl }) => $coverUrl}),
    linear-gradient(lightgray, lightgray);
  background-position: center, 50%;
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  margin-bottom: 12px;
`;

export const CardTitle = styled.h4`
  grid-area: title;
  color: var(--m-3-ref-neutral-neutral-100, #fff);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  ${oneLineEllipsis}
  margin-bottom: 4px;
`;

export const CardOwner = styled.p`
  grid-area: owner;
  color: var(--m-3-ref-neutral-neutral-100, #fff);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  ${oneLineEllipsis}
  margin-bottom: 4px;
`;

export const CardDescription = styled.p`
  grid-area: description;
  display: -webkit-box;
  -webkit-line-clamp: ${({ $isExpanded }) =>
    $isExpanded ? descrMaxLines : descrMinLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: var(--m-3-ref-neutral-neutral-70, #aea9b1);
  font-size: 14px;
  font-weight: 500;
  line-height: ${descrLineHeight}px;
  letter-spacing: 0.1px;
`;

export const DescriptionCTA = styled.button`
  grid-area: moreLessIcon;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--m-3-ref-neutral-neutral-70, #aea9b1);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
`;
