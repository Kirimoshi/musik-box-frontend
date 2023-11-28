import React, { useEffect, useRef, useState } from 'react';
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

function AddFriend() {
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
      <OneLineMessage message='Processing...' />,
      baseToastConfig
    );
  };

  const notifySuccess = () => {
    toast.update(toastId.current, {
      type: toast.TYPE.SUCCESS,
      autoClose: 1000,
      render: <OneLineMessage message='Request successfuly sent' />,
    });
  };

  const notifyError = (errorMsg) => {
    toast.update(toastId.current, {
      type: toast.TYPE.ERROR,
      autoClose: 1000,
      render: <OneLineMessage message={errorMsg} />,
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
    if (isModalOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
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
      const errMsg = error.includes(ADD_FRIEND_FETCH_ERROR_RESPONSES.EXIST)
        ? ADD_FRIEND_ERROR_TEXTS.EXIST
        : error.includes(ADD_FRIEND_FETCH_ERROR_RESPONSES.NOT_FOUND)
        ? ADD_FRIEND_ERROR_TEXTS.NOT_FOUND
        : error.includes(ADD_FRIEND_FETCH_ERROR_RESPONSES.YOURSELF)
        ? ADD_FRIEND_ERROR_TEXTS.YOURSELF
        : ADD_FRIEND_ERROR_TEXTS.DEFAULT;

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
      <FriendCustomButton onClick={handleToggleModal}>
        Add New Friend
      </FriendCustomButton>
    </>
  );
}

export default AddFriend;
