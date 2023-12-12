import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { oneLineEllipsis } from '../../../shared/Shared.styles';

export const SidebarContainer = styled.div`
  height: 100%;
  background: #010f19;
  padding: 24px 36px 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
`;

export const Logo = styled(Link)`
  margin-bottom: 24px;
  color: white;
  font-size: 20px;
  line-height: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  & svg {
    font-size: 28px;
  }
`;

export const Divider = styled.hr`
  width: 288px;
  height: 1px;
  background-color: #49454f;
  border: none;
`;

const userInfoWidth = 288;
const userInfoPadding = 16;
const userInfoGap = 12;
const avatarWidth = 60;
const penIconWidth = 24;
const authUserInfoColumnTemplate = `${avatarWidth}px minmax(auto,${
  userInfoWidth -
  avatarWidth -
  penIconWidth -
  userInfoPadding * 2 -
  userInfoGap * 2
}px) ${penIconWidth}px`;
const unAuthUserInfoColumnTemplate = `${avatarWidth}px auto`;

export const UserInfo = styled.figure`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$authState
      ? authUserInfoColumnTemplate
      : unAuthUserInfoColumnTemplate};
  align-items: center;
  gap: ${userInfoGap}px;
  min-height: 60px;
  width: 288px;
  padding: ${userInfoPadding}px;
  position: relative;
  margin-top: 24px;
  border-radius: 18px;
  background: #4f378b;
`;

export const UserAvatar = styled.div`
  height: 60px;

  & > img {
    width: ${avatarWidth}px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const AccountDetails = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > p {
    max-width: 100%;
    ${oneLineEllipsis};
  }

  & > p.user-info__nickname {
    color: #fff;
    font-size: 22px;
    font-weight: 400;
    line-height: 28px;
  }

  & > p.user-info__email {
    color: var(--m-3-ref-neutral-neutral-80, #cac5cd);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
  }
`;

export const AccountEdit = styled.div`
  width: ${penIconWidth}px;
  height: ${penIconWidth}px;
  cursor: pointer;
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

  &:hover {
    scale: 1.2;
    transition: scale 0.2s ease-in-out;
  }
`;

export const AboutApp = styled.div`
  margin-top: 24px;
  margin-bottom: 12px;
  color: var(--m-3-ref-neutral-neutral-70, #aea9b1);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
`;

export const NavContainer = styled.nav`
  margin: 5px 0px;
`;

export const AboutUsLink = styled(NavLink)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: var(--m-3-sys-dark-on-surface, #e6e0e9);
  padding: 5px;
  width: 180px;
  height: 45px;
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;

  &.active {
    padding-left: 10px;
    color: white;
    background: #030109;
    border: 1px solid #49454f;
    border-radius: 14px;
  }
`;

export const Logout = styled.button`
  max-width: max-content;
  align-self: center;
  margin-top: 36px;
  padding: 10px 12px;

  color: var(--m-3-sys-dark-primary, #d0bcff);
  background-color: transparent;
  border: none;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
`;

export const LoginWrapper = styled.div`
  display: grid;
  grid-template: repeat(2, auto) / auto 1px auto;
  justify-content: center;
  gap: 4px 8px;

  & > p {
    grid-column: 1 / -1;
    color: var(--m-3-ref-neutral-neutral-80, #cac5cd);
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
`;

export const VerticalDivider = styled.div`
  width: 1px;
  background: #fff;
`;

export const LoginLink = styled(Link)`
  text-align: center;
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
`;
