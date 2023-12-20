import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFriendErrorSelector,
  addFriendLoadingSelector,
} from '../../../store/friends/friends.selector';
import { fetchAddFriend } from '../../../store/friends/friends.thunks';
import { toast } from 'react-toastify';
import { OneLineMessage, baseToastConfig } from '../../../shared/Toasts';
import {
  ActionButton,
  FriendCustomButton,
  FriendModalContainer,
  FriendModalFormWrapper,
  FriendModalTitleWrapper,
} from './AddFriend.styles';
import { IoCloseOutline } from 'react-icons/io5';
import {
  ADD_FRIEND_ERROR_TEXTS,
  ADD_FRIEND_FETCH_ERROR_RESPONSES,
} from '../constants/constants';
import { setBackgroundBlur } from '../../../store/app/app.reducer';

function AddFriend({ className }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(addFriendLoadingSelector);
  const error = useSelector(addFriendErrorSelector);

  const [isCTAClicked, setIsCTAClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const dialogRef = useRef(null);
  const toastId = useRef(null);

  const notify = () => {
    toastId.current = toast(
      <OneLineMessage
        className='add-friend__modal--pending-toast'
        message='Processing...'
      />,
      baseToastConfig
    );
  };

  const notifySuccess = () => {
    toast.update(toastId.current, {
      type: toast.TYPE.SUCCESS,
      autoClose: 1500,
      render: (
        <OneLineMessage
          message='Request successfuly sent'
          className='add-friend__modal--success-toast'
        />
      ),
    });
  };

  const notifyError = (errorMsg) => {
    toast.update(toastId.current, {
      type: toast.TYPE.ERROR,
      autoClose: 1500,
      render: (
        <OneLineMessage
          message={errorMsg}
          className='add-friend__modal--error-toast'
        />
      ),
    });
  };

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleModalSubmitFriend = (event) => {
    event.preventDefault();
    setIsCTAClicked(true);
    dispatch(fetchAddFriend(inputValue));
  };

  useEffect(() => {
    dispatch(setBackgroundBlur(isModalOpen));
    if (isModalOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  useEffect(() => {
    if (isCTAClicked && isLoading) {
      notify();
    }
    if (isCTAClicked && !isLoading && !error) {
      notifySuccess();
      setIsCTAClicked(false);
      setInputValue('');
      setIsModalOpen(false);
    }
    if (isCTAClicked && !isLoading && error) {
      let errMsg;
      switch (true) {
        case error.includes(ADD_FRIEND_FETCH_ERROR_RESPONSES.EXIST):
          errMsg = ADD_FRIEND_ERROR_TEXTS.EXIST;
          break;
        case error.includes(ADD_FRIEND_FETCH_ERROR_RESPONSES.PENDING):
          errMsg = ADD_FRIEND_ERROR_TEXTS.PENDING;
          break;
        case error.includes(ADD_FRIEND_FETCH_ERROR_RESPONSES.NOT_FOUND):
          errMsg = ADD_FRIEND_ERROR_TEXTS.NOT_FOUND;
          break;
        case error.includes(ADD_FRIEND_FETCH_ERROR_RESPONSES.YOURSELF):
          errMsg = ADD_FRIEND_ERROR_TEXTS.YOURSELF;
          break;
        default:
          errMsg = ADD_FRIEND_ERROR_TEXTS.DEFAULT;
      }

      notifyError(errMsg);
      setIsCTAClicked(false);
    }
  }, [isCTAClicked, isLoading, error]);

  return (
    <>
      <FriendModalContainer ref={dialogRef} className='add-friend-modal'>
        <FriendModalTitleWrapper>
          <h3 className='add-friend-modal__title'>Adding new Friend</h3>
          <button
            onClick={handleToggleModal}
            className='add-friend-modal__btn--close'
          >
            <IoCloseOutline />
          </button>
        </FriendModalTitleWrapper>
        <FriendModalFormWrapper
          onSubmit={handleModalSubmitFriend}
          autoComplete='on'
          className='add-friend-modal__form'
        >
          <input
            className='add-friend-modal__input'
            type='email'
            name='email'
            placeholder='Enter email'
            value={inputValue}
            onChange={handleInput}
            required
          />
          <ActionButton type='submit' className='add-friend-modal__btn--submit'>
            Add Friend
          </ActionButton>
        </FriendModalFormWrapper>
      </FriendModalContainer>
      <FriendCustomButton onClick={handleToggleModal} className={className}>
        Add New Friend
      </FriendCustomButton>
    </>
  );
}

AddFriend.propTypes = {
  className: PropTypes.string,
};

export default AddFriend;
