import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../store/user/user.selector";
import { logoutUser } from "../../store/user/user.thunks";

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
  ToatsMsg,
} from "./Sidebar.styles";

import { toast } from "react-toastify";
import { clearError } from "../../store/user/user.reducer";

function LogoutPendigMessage() {
  return (
    <ToatsMsg>
      <p>Logging out...</p>
    </ToatsMsg>
  );
}
function LogoutSuccessMessage() {
  return (
    <ToatsMsg>
      <p>You have been successfully logged out</p>
      <p>Come back anytime!</p>
    </ToatsMsg>
  );
}

function LogooutErrorMessage() {
  return (
    <ToatsMsg>
      <p>Something went wrong</p>
      <p>Please try again</p>
    </ToatsMsg>
  );
}

function Sidebar() {
  const userName = "Olsheer";
  const userEmail = "email@.com";
  const dispatch = useDispatch();
  const toastId = React.useRef(null);
  const { isAuthenticated: isAuth, loading, error } = useSelector(userSelector);

  const [isLogoutClicked, setIsLogoutClicked] = useState(false);

  const notify = () =>
    (toastId.current = toast(<LogoutPendigMessage />, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }));
  const notifyError = () =>
    toast.update(toastId.current, {
      type: toast.TYPE.ERROR,
      autoClose: 2000,
      render: <LogooutErrorMessage />,
    });
  const notifySuccess = () =>
    toast.update(toastId.current, {
      type: toast.TYPE.SUCCESS,
      autoClose: 2000,
      render: <LogoutSuccessMessage />,
    });

  useEffect(() => {
    if (isLogoutClicked && loading) {
      notify();
    }
    if (isLogoutClicked && !loading && error) {
      notifyError();
      setIsLogoutClicked(false);
      dispatch(clearError());
    }
    if (isLogoutClicked && !loading && !error) {
      notifySuccess();
      setIsLogoutClicked(false);
    }
  }, [isLogoutClicked, loading, error]);

  const handleLogout = () => {
    setIsLogoutClicked(true);
    dispatch(logoutUser());
  };

  return (
    <SidebarContainer>
      <Logo>
        <span>Music Box</span>
      </Logo>
      <Divider />
      <UserInfo $authState={isAuth}>
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
      <Logout onClick={handleLogout}>
        <span>Log out</span>
      </Logout>
    </SidebarContainer>
  );
}
export default Sidebar;
