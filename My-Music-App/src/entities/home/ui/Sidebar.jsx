import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import SidebarMenu from './SidebarMenu';
import MenuList from './MenuList';

import { ReactComponent as UnAuthIcon } from '../../../shared/assets/unAuthIcon.svg';
import { AiOutlineHome } from 'react-icons/ai';
import { RiPencilFill } from 'react-icons/ri';
import { userSelector } from '../../../store/user/user.selector';
import { logoutUser } from '../../../store/user/user.thunks';
import {
  AboutApp,
  AboutUsLink,
  AccountDetails,
  AccountEdit,
  Divider,
  LoginLink,
  LoginWrapper,
  Logo,
  Logout,
  SidebarContainer,
  UserAvatar,
  UserInfo,
  VerticalDivider,
  NavContainer,
} from './Sidebar.styles';

import {
  baseToastConfig,
  LogoutErrorMessage,
  LogoutPendingMessage,
  LogoutSuccessMessage,
} from '../../../shared/Toasts';
import { useNavigate } from 'react-router-dom';
import paths from '../../../router/paths';
import { myAccountSelector } from '../../../store/my-account/my-account.selector';
import { fetchMyAccount } from '../../../store/my-account/my-account.thunks';
import ImgWrap from '../../../features/shared/ImgWrap/ui/ImgWrap';
import {
  FALLBACK_TYPES,
  IMAGE_SIZES,
} from '../../../features/shared/ImgWrap/constants/constants';
import { resetMyAccount } from '../../../store/my-account/my-account.reducer';

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toastId = React.useRef(null);
  const { isAuthenticated: isAuth, loading, error } = useSelector(userSelector);
  const { nickname, email, profilePicture } = useSelector(myAccountSelector);

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
      navigate('/');
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
    dispatch(resetMyAccount());
  };

  const handleNavigateToMyAccount = () => {
    navigate(paths.myAccount);
  };

  useEffect(() => {
    if (!isAuth) return;
    dispatch(fetchMyAccount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <SidebarContainer>
      <Logo to='/' className='sidebar__logo'>
        <AiOutlineHome />
        <span>Music Box</span>
      </Logo>
      <Divider />
      <UserInfo $authState={isAuth} className='sidebar__user-info'>
        {isAuth ? (
          <>
            <UserAvatar className='user-info__picture'>
              <ImgWrap
                srcObj={profilePicture}
                size={IMAGE_SIZES.MICRO}
                fallbackType={FALLBACK_TYPES.USER}
              />
            </UserAvatar>
            <AccountDetails>
              <p className='user-info__nickname'>{nickname}</p>
              <p className='user-info__email'>{email}</p>
            </AccountDetails>
            <AccountEdit
              className='user-info__edit-icon'
              onClick={handleNavigateToMyAccount}
            >
              <RiPencilFill />
            </AccountEdit>
          </>
        ) : (
          <>
            <UserAvatar>
              <UnAuthIcon />
            </UserAvatar>
            <LoginWrapper className='logWrap'>
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
      <NavContainer>
        <AboutApp>
          <p>About the app</p>
        </AboutApp>
        <AboutUsLink to={paths.about}>About us</AboutUsLink>
      </NavContainer>

      <Divider />
      {isAuth && (
        <Logout onClick={handleLogout} className='user-info__btn--logout'>
          Log out
        </Logout>
      )}
    </SidebarContainer>
  );
}

export default Sidebar;
