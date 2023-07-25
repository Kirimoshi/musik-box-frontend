import React from "react";
import { RiPencilFill } from "react-icons/ri";
import SidebarMenu from "./SidebarMenu";
import MenuList from "./MenuList";

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
} from "./Sidebar.styles";

function Sidebar() {
  const userName = "Olsheer";
  const userEmail = "email@.com";
  return (
    <SidebarContainer>
      <Logo>
        <span>Music Box</span>
      </Logo>
      <Divider />
      <UserInfo>
        <UserAvatar>
          <img
            src={require("../assets/image1.jpg")} // will be replaced with current user avatar from backend
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
