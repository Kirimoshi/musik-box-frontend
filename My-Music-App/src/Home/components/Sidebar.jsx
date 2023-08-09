import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user.selector";

import { useNavigate } from "react-router-dom";

import { RiPencilFill } from "react-icons/ri";
import SidebarMenu from "./SidebarMenu";
import MenuList from "./MenuList";

import { ReactComponent as UnAuthIcon } from "../assets/unAuthIcon.svg";
import {
  SidebarContainer,
  Logo,
  Divider,
  UserInfo,
  UserAvatar,
  AccountDetails,
  AccountEdit,
  AboutApp,
  AboutUs,
  Logout,
  LoginWrapper,
  LoginLink,
  VerticvalDivider,
} from "./Sidebar.styles";

function Sidebar() {
  const userName = "Olsheer";
  const userEmail = "email@.com";
  const { isAuthenticated } = useSelector(userSelector);

  const navigate = useNavigate();

  const isAuth = false;

  return (
    <SidebarContainer>
      <Logo>
        <span>Music Box</span>
      </Logo>
      <Divider />
      <UserInfo authState={isAuth}>
        {isAuth ? (
          <>
            <UserAvatar>
              <img
                src={require("../assets/user_avatar.jpg")} // will be replaced with current user avatar from backend
                alt="current user avatar"
              />
            </UserAvatar>
            <AccountDetails>
              <span>{userName}</span>
              <span>{userEmail}</span>
            </AccountDetails>
            <AccountEdit>
              <RiPencilFill />
            </AccountEdit>
          </>
        ) : (
          <>
            <UserAvatar>
              <UnAuthIcon />
            </UserAvatar>
            <LoginWrapper className="logWrap">
              <LoginLink to={"/SignIn"}>Sign in</LoginLink>
              <VerticvalDivider />
              <LoginLink to={"/SignUp"}>Sign up</LoginLink>
              <p>Log in for advanced features</p>
            </LoginWrapper>
          </>
        )}
      </UserInfo>
      <SidebarMenu menuObject={MenuList} />
      <Divider />
      <AboutApp>
        <p>About the app</p>
      </AboutApp>
      <AboutUs>
        <p>About us</p>
      </AboutUs>
      <Divider />
      <Logout>
        <p>Log out</p>
      </Logout>
    </SidebarContainer>
  );
}
export default Sidebar;
