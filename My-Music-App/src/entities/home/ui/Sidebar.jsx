import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import SidebarMenu from "./SidebarMenu";
import MenuList from "./MenuList";

import { ReactComponent as UnAuthIcon } from "../../../shared/assets/unAuthIcon.svg";
import { AiOutlineHome } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { userSelector } from "../../../store/user/user.selector";
import { logoutUser } from "../../../store/user/user.thunks";
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
  VerticalDivider,
} from "./Sidebar.styles";

import {
  baseToastConfig,
  LogoutPendingMessage,
  LogoutSuccessMessage,
  LogoutErrorMessage,
} from "../../../shared/Toasts";
import { useNavigate } from "react-router-dom";
import paths from "../../../router/paths";
import { UPLOADS_URL } from "../../../store/constants";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toastId = React.useRef(null);
  const {
    isAuthenticated: isAuth,
    loading,
    error,
    credentials: { email, nickname, picture },
  } = useSelector(userSelector);

  const [isLogoutClicked, setIsLogoutClicked] = useState(false);

  const notify = useCallback(() => {
    toastId.current = toast(<LogoutPendingMessage />, baseToastConfig);
  }, []);

  const notifyError = useCallback(() => {
    toast.update(toastId.current, {
      type: toast.TYPE.ERROR,
      autoClose: 2000,
      render: <LogoutErrorMessage />,
    });
  }, []);

  const notifySuccess = useCallback(() => {
    toast.update(toastId.current, {
      type: toast.TYPE.SUCCESS,
      autoClose: 2000,
      render: <LogoutSuccessMessage />,
    });
  }, []);

  useEffect(() => {
    if (isLogoutClicked && loading) {
      notify();
    }
    if (isLogoutClicked && !loading && error) {
      notifyError();
      setIsLogoutClicked(false);
    }
    if (isLogoutClicked && !loading && !error) {
      notifySuccess();
      setIsLogoutClicked(false);
      navigate("/");
    }
  }, [
    isLogoutClicked,
    loading,
    error,
    notify,
    notifyError,
    notifySuccess,
    navigate,
  ]);

  const handleLogout = () => {
    setIsLogoutClicked(true);
    dispatch(logoutUser());
  };

  return (
    <SidebarContainer>
      <Logo to="/" className="sidebar__logo">
        <AiOutlineHome />
        <span>Music Box</span>
      </Logo>
      <Divider />
      <UserInfo $authState={isAuth} className="sidebar__user-info">
        {isAuth ? (
          <>
            <UserAvatar className="user-info__picure">
              <img
                src={
                  picture
                    ? `${UPLOADS_URL}/${picture.storage}/${picture.id}`
                    : require("../../../shared/assets/default_user_avatar.jpg")
                }
                alt="current user avatar"
              />
            </UserAvatar>
            <AccountDetails>
              <p className="user-info__nickname">{nickname}</p>
              <p className="user-info__email">{email}</p>
            </AccountDetails>
            <AccountEdit className="user-info__edit-icon">
              <RiPencilFill />
            </AccountEdit>
          </>
        ) : (
          <>
            <UserAvatar>
              <UnAuthIcon />
            </UserAvatar>
            <LoginWrapper className="logWrap">
              <LoginLink to={paths.signIn}>Sign in</LoginLink>
              <VerticalDivider />
              <LoginLink to={paths.signUp}>Sign up</LoginLink>
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
      {isAuth && (
        <Logout onClick={handleLogout} className="user-info__btn--logout">
          Log out
        </Logout>
      )}
    </SidebarContainer>
  );
}
export default Sidebar;
