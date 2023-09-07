import styled, { css } from "styled-components";
import {
  PublicPlaylistCardContainer,
  PublicPlaylistCardImage,
  PublicPlaylistCardTextWrapper,
} from "../../../public-playlists/ui/public-playlist-card/PublicPLaylistCard.styles";
import { PublicPlaylistListContainer } from "../../../public-playlists/ui/public-playlist-list/PublicPlaylistList.styles";

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// reexport
export const MyPlaylistsCardContainer = styled(PublicPlaylistCardContainer)`
  cursor: unset;
  ${(props) => (props.$top ? "z-index: 10" : "z-index: auto")}
`;

export const MyPlaylistsCardImage = styled(PublicPlaylistCardImage)`
  cursor: pointer;
`;

export const MyPlaylistsCardTextWrapper = styled(PublicPlaylistCardTextWrapper)`
  cursor: pointer;
`;

export const MyPlaylistsListContainer = styled(PublicPlaylistListContainer)`
  margin-bottom: 5vh;
`;

export const Menu = styled.ul`
  // Layout
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  width: 212px;
  padding: 8px 0px;
  // Styling
  border-radius: 4px;
  background: var(--m-3-sys-dark-surface-container, #211f26);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  // Position
  position: absolute;
  top: 65%;
  right: 10px;
`;

const commonMenuItem = css`
  height: 40px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  // Styles for children implementerd as >svg and >span to prevent unnecesary wrapping
  & > svg {
    ${flexCenter}
    height: 24px;
    width: 24px;
  }
  & > span {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
`;

export const MenuItemDivider = styled.li`
  width: 100%;
  height: 1px;
  margin: 8px 0px;
  background: #49454f;
`;

export const MenuItemDelete = styled.li`
  ${commonMenuItem}
  color: var(--m-3-sys-dark-error, #F2B8B5);
  cursor: pointer;
`;

export const MenuItemEdit = styled.li`
  ${commonMenuItem}
  color: var(--m-3-sys-dark-on-surface, #E6E0E9);
  cursor: pointer;
  &:hover {
    color: #f2b8b5;
  }
`;

export const PlaylistMenuIcon = styled.div`
  font-size: 24px;
  padding: 12px;
  padding-right: 16px;
  ${flexCenter}

  &>svg {
    cursor: pointer;
  }
`;
