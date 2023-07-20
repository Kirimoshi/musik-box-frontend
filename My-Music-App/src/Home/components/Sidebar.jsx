import React from "react";
// import "../Styles/leftmenu.css";
import { RiPencilFill } from "react-icons/ri";
import SidebarMenu from "./SidebarMenu";
import MenuList from "./MenuList";

import { SidebarContainer, Logo, Divider, Accout } from "./Sidebar.styles";

function Sidebar() {
  return (
    <SidebarContainer className="_leftmenu">
      <Logo className="_logocontainer">
        <span>Music Box</span>
      </Logo>
      <Divider className="_divider" />
      <Accout className="_account_setting">
        <div className="_account_image_details">
          <div className="_account_image">
            <img
              src={require("../assets/image1.jpg")} // TODO replace with current user avatar from backend
              alt="current user avatar"
              className="_img1"
            />
          </div>
          <div className="_account_details">
            <div className="_account_name">user1</div>
            <div className="_account_email">user1epam.com</div>
          </div>
          <div className="_account_edit">
            <RiPencilFill className="_icon-edit" />
          </div>
        </div>
      </Accout>
      <SidebarMenu menuObject={MenuList} />
      <Divider className="_divider" />
      <div className="_about_the_app">
        <p>About the app</p>
      </div>
      <div className="_about_us">
        <p>About us</p>
      </div>
      <Divider className="_divider" />
      <div className="_logout">
        <p>Log out</p>
      </div>
    </SidebarContainer>
  );
}
export default Sidebar;
