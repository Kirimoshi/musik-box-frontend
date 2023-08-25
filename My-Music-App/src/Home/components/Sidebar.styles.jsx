import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  height: 100%;
  background: #010f19;
  padding: 24px 36px 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  margin-bottom: 24px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 20px;
  line-height: 28px;
`;

export const Divider = styled.hr`
  width: 288px;
  height: 1px;
  background-color: #49454f;
  border: none;
`;

const avatarWidth = "60";
const penIconWidth = "24";
const userInfoPadding = "16";
const authUserInfoColumnTemplate = `${avatarWidth}px auto ${penIconWidth}px`;
const unAuthUserInfoColumnTemplate = `${avatarWidth}px auto`;

export const UserInfo = styled.div`
  // Layout
  display: grid;
  grid-template-columns: ${(props) =>
    props.$authState
      ? authUserInfoColumnTemplate
      : unAuthUserInfoColumnTemplate};
  align-items: center;
  gap: 12px;
  min-height: 60px;
  padding: ${userInfoPadding}px;
  position: relative;
  margin-top: 24px;
  // Style
  border-radius: 18px;
  background: #4f378b;
`;
export const UserAvatar = styled.div`
  height: 60px;
  & > img {
    width: ${avatarWidth}px;
    aspect-ratio: 1/1;
    border-radius: 100px;
  }
`;
export const AccountDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > span:first-child {
    color: #fff;
    /* M3/title/large */
    font-family: Roboto, sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 28px; /* 127.273% */
  }
  & > span:last-child {
    color: var(--m-3-ref-neutral-neutral-80, #cac5cd);
    /* M3/body/medium */
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.25px;
  }
`;
export const AccountEdit = styled.div`
  width: ${penIconWidth}px;
  height: ${penIconWidth}px;
  align-self: end;
  transform: translate(
    ${Math.round(userInfoPadding / 2)}px,
    ${Math.round(userInfoPadding / 2)}px
  );
  & > svg {
    /* Icon takes width/height from fontsize */
    font-size: ${penIconWidth}px;
    color: #ffffff;
  }
`;

export const AboutApp = styled.div`
  margin-top: 24px;
  margin-bottom: 12px;
  color: var(--m-3-ref-neutral-neutral-70, #aea9b1);
  /* M3/label/medium */
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.5px;
`;

export const AboutUs = styled.div`
  margin-bottom: 24px;
  color: var(--m-3-sys-dark-on-surface, #e6e0e9);
  /* M3/body/large */
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.5px;
`;
export const Logout = styled.div`
  margin-top: 36px;
  color: var(--m-3-sys-dark-primary, #d0bcff);
  text-align: center;
  cursor: pointer;

  /* M3/label/large */
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
`;

export const SignIn = styled.div`
  //
`;

export const LoginWrapper = styled.div`
  display: grid;
  grid-template: repeat(2, auto) / auto 1px auto;
  justify-content: center;
  gap: 4px 8px;

  & > p {
    grid-column: 1 / -1;
    color: var(--m-3-ref-neutral-neutral-80, #cac5cd);
    /* M3/body/small */
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
  }
`;

export const VerticalDivider = styled.div`
  width: 1px;
  background: #fff;
`;

export const LoginLink = styled(Link)`
  text-align: center;
  color: #fff;
  /* M3/title/large */
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 127.273% */
`;
