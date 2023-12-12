import {
  ActionWrap,
  AvatarDeleteIcon,
  AvatarImage,
  AvatarInput,
  AvatarItem,
  AvatarWrap,
  DataWrap,
  FormInput,
  FormResetButton,
  FormSubmitButton,
  FormText,
  Header,
  InputClearButton,
  PersonalDataForm,
  UploadIcon,
  Wrapper,
} from './MyAccount.styles';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMyAccount,
  updateMyAccount,
} from '../../store/my-account/my-account.thunks';
import {
  myAccountErrorSelector,
  myAccountLoadingSelector,
  myAccountSelector,
} from '../../store/my-account/my-account.selector';
import { UPLOADS_URL } from '../../store/constants';
import { MdPhotoCamera } from 'react-icons/md';
import { isEmpty, validateMyAccount } from './lib/utils/MyAccountValidation';
import Tippy from '@tippyjs/react';
import { toast } from 'react-toastify';
import { baseToastConfig, OneLineMessage } from '../../shared/Toasts';
import {
  DELETE_AVATAR_MODAL_MESSAGES,
  LEAVE_PAGE_CONFIRMATION_MODAL,
  TOAST_MESSAGES,
} from './constants/constants';
import { userSelector } from '../../store/user/user.selector';
import ModalDialog from '../../shared/ModalDialog';
import { useBlocker } from 'react-router-dom';

function MyAccount() {
  const dispatch = useDispatch();
  const toastId = useRef(null);
  const { isAuthenticated: isAuth } = useSelector(userSelector);
  const {
    nickname: initUsername,
    email: initEmail,
    profilePicture: initProfilePicture,
  } = useSelector(myAccountSelector);
  const loading = useSelector(myAccountLoadingSelector);
  const error = useSelector(myAccountErrorSelector);
  const initDetails = {
    nickname: initUsername ?? '',
    email: initEmail ?? '',
    profilePicture: null,
  };
  const [isDetailsModified, setIsDetailsModified] = useState(false);
  const avatarInputRef = useRef(null);
  const [myAccountDetails, setMyAccountDetails] = useState(initDetails);
  const { nickname, email, profilePicture } = myAccountDetails;
  const [myAccountErrors, setMyAccountErrors] = useState({});
  const avatarURL = initProfilePicture
    ? `${UPLOADS_URL}/${initProfilePicture.storage}/${initProfilePicture.id}`
    : '';

  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [isDeleteAvatarModalOpen, setIsDeleteAvatarModalOpen] = useState(false);

  let blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      isDetailsModified && currentLocation.pathname !== nextLocation.pathname
  );
  const handleDeleteAvatarModalOpen = () => setIsDeleteAvatarModalOpen(true);
  const handleDeleteAvatarModalClose = () => setIsDeleteAvatarModalOpen(false);
  const handleStayOnPage = () => blocker.reset();
  const handleLeavePage = () => blocker.proceed();

  const notify = useCallback(() => {
    toastId.current = toast(
      <OneLineMessage message={TOAST_MESSAGES.PENDING} />,
      baseToastConfig
    );
  }, []);

  const notifyError = useCallback(() => {
    toast.update(toastId.current, {
      type: toast.TYPE.ERROR,
      autoClose: 2000,
      render: <OneLineMessage message={TOAST_MESSAGES.ERROR} />,
    });
  }, []);

  const notifySuccess = useCallback(() => {
    toast.update(toastId.current, {
      type: toast.TYPE.SUCCESS,
      autoClose: 2000,
      render: <OneLineMessage message={TOAST_MESSAGES.SUCCESS} />,
    });
  }, []);

  useEffect(() => {
    if (isSaveClicked && loading) {
      notify();
    }
    if (isSaveClicked && !loading && error) {
      notifyError();
      setIsSaveClicked(false);
    }
    if (isSaveClicked && !loading && !error) {
      notifySuccess();
      setIsSaveClicked(false);
      setIsDetailsModified(false);
    }
  }, [isSaveClicked, loading, error, notify, notifyError, notifySuccess]);

  const handleInputPaste = (e) => {
    const { name } = e.target;
    setMyAccountDetails({
      ...myAccountDetails,
      [name]: e.clipboardData.getData('text/plain'),
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMyAccountDetails({ ...myAccountDetails, [name]: value });
  };
  const clearInput = (e) => {
    const { name } = e.currentTarget;
    setMyAccountDetails({ ...myAccountDetails, [name]: '' });
  };

  const handleUploadClick = () => {
    avatarInputRef.current.click();
    setMyAccountErrors({ ...myAccountErrors, profilePicture: '' });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!myAccountErrors.profilePicture) {
      setMyAccountDetails({
        ...myAccountDetails,
        profilePicture: file,
      });
    }
    setIsDetailsModified(true);
  };

  const handleAvatarDelete = async () => {
    const file = await fetchAvatar(
      require('../../shared/assets/default_user_avatar_small.png')
    );
    setMyAccountDetails({
      ...myAccountDetails,
      profilePicture: file,
    });
    setIsDetailsModified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaveClicked(true);
    let formData = new FormData();
    formData.append('nickname', nickname);
    formData.append('email', email);
    formData.append('profile_picture', profilePicture);
    dispatch(updateMyAccount(formData));
  };

  const handleReset = async () => {
    const file = await fetchAvatar(avatarURL);
    setMyAccountDetails({
      nickname: initUsername,
      email: initEmail,
      profilePicture: file,
    });
  };

  async function fetchAvatar(url) {
    const data = await fetch(url);
    const buffer = await data.arrayBuffer();
    const blob = new Blob([buffer], {
      type: initProfilePicture.metadata.mime_type,
    });
    const file = new File([blob], initProfilePicture.metadata.filename, {
      type: initProfilePicture.metadata.mime_type,
    });
    return file;
  }

  async function addFileToState() {
    const file = await fetchAvatar(avatarURL);
    setMyAccountDetails({ ...myAccountDetails, profilePicture: file });
  }

  useEffect(() => {
    if (!isAuth) return;
    dispatch(fetchMyAccount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  useEffect(() => {
    if (!avatarURL) {
      return;
    }
    addFileToState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (initUsername === '' || initEmail === '') {
      return;
    }
    if (nickname !== initDetails.nickname || email !== initDetails.email) {
      setIsDetailsModified(true);
    } else {
      setIsDetailsModified(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nickname, email]);

  useEffect(() => {
    setMyAccountErrors(validateMyAccount(myAccountDetails));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nickname, email, profilePicture]);

  return (
    <Wrapper className='my-account__wrapper'>
      <ModalDialog
        className='modal__delete-avatar'
        options={{
          isModalOpen: isDeleteAvatarModalOpen,
          actionButtonText: DELETE_AVATAR_MODAL_MESSAGES.ACTION,
          closeButtonText: DELETE_AVATAR_MODAL_MESSAGES.CLOSE,
          title: DELETE_AVATAR_MODAL_MESSAGES.TITLE,
          onAction: handleAvatarDelete,
          onClose: handleDeleteAvatarModalClose,
        }}
      />
      <ModalDialog
        className='modal__leave-page'
        options={{
          isModalOpen: blocker.state === 'blocked',
          actionButtonText: LEAVE_PAGE_CONFIRMATION_MODAL.ACTION,
          closeButtonText: LEAVE_PAGE_CONFIRMATION_MODAL.CLOSE,
          title: LEAVE_PAGE_CONFIRMATION_MODAL.TITLE,
          onAction: handleLeavePage,
          onClose: handleStayOnPage,
        }}
      />
      <PersonalDataForm
        name='personal-data-form'
        onSubmit={handleSubmit}
        className='personal-data-form'
      >
        <Header className='personal-data-form__header'>Personal data</Header>
        <AvatarWrap className='personal-data-form__avatar-wrap'>
          <FormText>My avatar</FormText>
          <Tippy
            placement='right'
            content={myAccountErrors.profilePicture}
            disabled={!myAccountErrors.profilePicture}
            animation='fade'
            duration='500'
            className='personal-data-form__profile-picture-tooltip'
          >
            <AvatarItem className='personal-data-form__profile-picture'>
              {myAccountDetails.profilePicture &&
              !myAccountErrors.profilePicture ? (
                <AvatarImage
                  src={URL.createObjectURL(myAccountDetails.profilePicture)}
                  alt='User avatar'
                />
              ) : (
                <AvatarImage
                  src={require('../../shared/assets/default_user_avatar_small.png')}
                  alt='Default user avatar'
                />
              )}
              <UploadIcon
                onClick={handleUploadClick}
                className='personal-data-form__profile-picture-upload-icon'
              >
                <MdPhotoCamera size='30' fill='#9747FF' />
                <label htmlFor='avatar'></label>
                <AvatarInput
                  type='file'
                  id='avatar'
                  ref={avatarInputRef}
                  onChange={handleAvatarChange}
                  accept='image/jpeg, image/png, image/jpg, image/svg'
                  className='personal-data-form__profile-picture-input'
                />
              </UploadIcon>
              <AvatarDeleteIcon
                onClick={handleDeleteAvatarModalOpen}
                className='personal-data-form__profile-picture-delete-icon'
              >
                <AiOutlineCloseCircle size='52' fill='#EC928E' />
              </AvatarDeleteIcon>
            </AvatarItem>
          </Tippy>
        </AvatarWrap>
        <DataWrap className='personal-data-form__user-text-data-wrap'>
          <FormText>My data</FormText>
          <Tippy
            placement='right'
            content={myAccountErrors.nickname}
            disabled={!myAccountErrors.nickname}
            animation='fade'
            duration='500'
            className='personal-data-form__nickname-tooltip'
          >
            <fieldset>
              <legend>Nickname</legend>
              <label htmlFor='nickname'></label>
              <FormInput
                type='text'
                name='nickname'
                id='nickname'
                required
                value={myAccountDetails.nickname}
                onChange={handleInputChange}
                onPaste={handleInputPaste}
                className='personal-data-form__nickname-input'
              />
              <InputClearButton
                type={'reset'}
                form={'personal-data-form'}
                name='nickname'
                className='personal-data-form__nickname-input-clear-btn'
                onClick={clearInput}
              >
                <AiOutlineCloseCircle className='clear-icon' />
              </InputClearButton>
            </fieldset>
          </Tippy>
          <Tippy
            placement='right'
            content={myAccountErrors.email}
            disabled={!myAccountErrors.email}
            animation='fade'
            duration='500'
            className='personal-data-form__email-tooltip'
          >
            <fieldset>
              <legend>Email</legend>
              <label htmlFor='email'></label>
              <FormInput
                type='email'
                name='email'
                id='email'
                required
                value={myAccountDetails.email}
                onChange={handleInputChange}
                onPaste={handleInputPaste}
                className='personal-data-form__email-input'
              />
              <InputClearButton
                type={'reset'}
                form={'personal-data-form'}
                name='email'
                className='personal-data-form__email-input-clear-btn'
                onClick={clearInput}
              >
                <AiOutlineCloseCircle className='clear-icon' />
              </InputClearButton>
            </fieldset>
          </Tippy>
        </DataWrap>
        <ActionWrap className='personal-data-form__action-btn-wrap'>
          <FormSubmitButton
            type='submit'
            name='form-save-btn'
            disabled={!isDetailsModified || !isEmpty(myAccountErrors)}
            onSubmit={handleSubmit}
            className='personal-data-form__submit-btn'
          >
            Save
          </FormSubmitButton>
          <FormResetButton
            type='reset'
            name='form-cancel-btn'
            onClick={handleReset}
            className='personal-data-form__reset-btn'
          >
            Cancel
          </FormResetButton>
        </ActionWrap>
      </PersonalDataForm>
    </Wrapper>
  );
}

export default MyAccount;
