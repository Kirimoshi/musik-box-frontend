import styled from "styled-components";

export const PublicPlaylistCardContainer = styled.section`
  position: relative;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3));
  border-radius: 12px;
  background-color: rgb(23, 23, 23);
  cursor: pointer;
`;

export const PublicPlaylistCardImage = styled.img`
  height: 100%;
  width: 168px;
  object-fit: cover;
  border-radius: 12px 0 0 12px;
  overflow: hidden;
`;

export const PublicPlaylistCardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 5px;
`;

export const PublicPlaylistCardTextWrapper = styled.div`
  color: #e6e0e9;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 1128px;
  height: 100%;
  & > .public-playlist-card_created-by {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    height: 20px;
    letter-spacing: 0.1px;
    text-align: left;
    color: inherit;
  }
`;

export const PublicPlaylistCardName = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: left;
  height: 24px;
`;

export const PublicPlaylistCardSongs = styled.p`
  height: 20px;
  max-width: 1100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-align: left;
  color: white;
`;

export const PublicPlaylistCardLikes = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  display: flex;
  gap: 4px;
  & > .count-wrapper {
    display: flex;
    gap: 4px;
  }
  & .btn {
    cursor: pointer;
    background-color: inherit;
    display: inline-block;
    font-size: 24px;
    width: 24px;
    height: 24px;
  }
  & .count {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    align-self: center;
  }
`;
