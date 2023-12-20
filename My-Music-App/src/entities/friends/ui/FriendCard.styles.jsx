import styled, { css } from 'styled-components';
import { flexHorizontalCenter } from '../../../shared/Shared.styles';
import { FRIENDS_TAB_TYPES } from '../constants/constants';

const denyColor = css`
  color: #d15149;
`;
const acceptColor = css`
  color: #30a750;
`;

const twoIcons = css`
  & > svg:first-child {
    ${denyColor}
  }
  & > svg:last-child {
    ${acceptColor}
  }
`;

export const FriendCardContainer = styled.li`
  border-radius: 18px;
  background: #090710;
  overflow: hidden;

  display: grid;
  align-items: center;
  grid-template-columns: 40px auto max-content;
  grid-template-areas: 'avatar caption icons';
  gap: 0 12px;
  padding: 16px;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
`;

export const FriendCardAvatar = styled.figure`
  grid-area: avatar;

  & > img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
  }
`;

export const FriendCardCaption = styled.ul`
  grid-area: caption;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const FriendCardCaptionItem = styled.li`
  display: flex;
  align-items: center;
  color: var(--m-3-ref-neutral-neutral-80, #cac5cd);
  font-size: 12px;
  line-height: 16px;

  & > svg {
    font-size: 16px;
    margin-right: 8px;
  }
`;

export const FriendCardCaptionItemName = styled(FriendCardCaptionItem)`
  color: var(--m-3-white, #fff);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const FriendCardIcons = styled.div`
  grid-area: icons;
  ${flexHorizontalCenter}
  gap: 24px;
  font-size: 24px;
  padding: 12px;

  & > svg {
    cursor: ${({ $isIconActive }) =>
      $isIconActive ? 'pointer' : 'not-allowed'};
  }

  ${({ $tabType }) => $tabType === FRIENDS_TAB_TYPES.MY_FRIENDS && denyColor}
  ${({ $tabType }) => $tabType === FRIENDS_TAB_TYPES.REQUEST && twoIcons}
  ${({ $tabType }) => $tabType === FRIENDS_TAB_TYPES.SENT && denyColor}
`;

export const StubMessageContainer = styled(FriendCardContainer)`
  grid-template-columns: 1fr;
  justify-items: center;
  font-size: 18px;
  line-height: 24px;
  color: var(--m-3-white, #fff);
  min-height: 100px;
`;
