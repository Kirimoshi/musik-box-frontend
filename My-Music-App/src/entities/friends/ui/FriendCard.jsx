import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FriendCardAvatar,
  FriendCardCaptionItemName,
  FriendCardCaption,
  FriendCardCaptionItem,
  FriendCardContainer,
  FriendCardIcons,
} from './FriendCard.styles';
import { capitalizeWords, formatDateDDmmmYYYY } from '../../../store/helpers';
import {
  FRIENDS_CTA_BUTTON_TYPES,
  FRIENDS_TAB_TYPES,
  TEXT_FOR_DATA_FIELDS,
} from '../constants/constants';
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { UPLOADS_URL } from '../../../store/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAcceptFriendship,
  fetchDeleteFriendship,
} from '../../../store/friends/friends.thunks';
import {
  setFriendsCTAClicked,
  setFriendsCTAClickedFriendName,
} from '../../../store/friends/friends.reducer';
import { friendsCTAClickedSelector } from '../../../store/friends/friends.selector';
import ModalDialog from '../../../shared/ModalDialog';

function FriendCard({ friend, tabType }) {
  const dispatch = useDispatch();
  const friendsCTAClicked = useSelector(friendsCTAClickedSelector);
  const shouldAllowCTA = friendsCTAClicked === FRIENDS_CTA_BUTTON_TYPES.NONE;
  const {
    id: friendId,
    attributes: {
      updated_at: updatedAt,
      shared_playlists: numOfSharedPlaylists,
      peer: { nickname, email, profile_picture: profilePicture },
    },
  } = friend;
  const formattedUpdateDate = formatDateDDmmmYYYY(new Date(updatedAt));

  const [modalOptions, setModalOptions] = useState({
    isModalOpen: false,
    actionButtonText: '',
    closeButtonText: '',
    title: '',
    onClose: () => {},
    onAction: () => {},
  });

  const handleCloseModal = () =>
    setModalOptions({ ...modalOptions, isModalOpen: false });

  const handleModalDeleteMyFriend = () => {
    setModalOptions({
      isModalOpen: true,
      actionButtonText: 'Delete friend',
      closeButtonText: 'Cancel',
      title: `Are you sure you want to delete ${capitalizeWords(
        nickname
      )} from friends?`,
      onClose: handleCloseModal,
      onAction: handleDeleteFriendshipClick(FRIENDS_CTA_BUTTON_TYPES.DELETE),
    });
  };

  const handleAcceptFriendshipClick = (CTAType) => () => {
    dispatch(setFriendsCTAClicked(CTAType));
    dispatch(setFriendsCTAClickedFriendName(nickname));
    dispatch(fetchAcceptFriendship(friendId));
  };

  const handleDeleteFriendshipClick = (CTAType) => () => {
    dispatch(setFriendsCTAClicked(CTAType));
    dispatch(setFriendsCTAClickedFriendName(nickname));
    dispatch(fetchDeleteFriendship(friendId));
  };

  return (
    <>
      <FriendCardContainer
        className='friend-card__wrapper'
        data-friend-id={friendId}
      >
        <ModalDialog className='friend-card__modal' options={modalOptions} />
        <FriendCardAvatar className='friend-card__img-wrap'>
          <img
            src={
              profilePicture
                ? `${UPLOADS_URL}/${profilePicture.storage}/${profilePicture.id}`
                : require('../../../shared/assets/default_user_avatar.jpg')
            }
            alt={`${nickname} avatar`}
          />
        </FriendCardAvatar>
        <FriendCardCaption className='friend-card__caption'>
          <FriendCardCaptionItemName className='friend-card__caption--name'>
            {capitalizeWords(nickname)}
          </FriendCardCaptionItemName>
          <FriendCardCaptionItem className='friend-card__caption--email'>
            {email}
          </FriendCardCaptionItem>
          <FriendCardCaptionItem className='friend-card__caption--num-shared-playlists'>
            <AiOutlineShareAlt />
            <span>{`${numOfSharedPlaylists ?? '0'} shared playlists`}</span>
          </FriendCardCaptionItem>
          <FriendCardCaptionItem className='friend-card__caption--date'>
            {`${TEXT_FOR_DATA_FIELDS[tabType]}: ${formattedUpdateDate}`}
          </FriendCardCaptionItem>
        </FriendCardCaption>
        <FriendCardIcons
          $tabType={tabType}
          $isIconActive={shouldAllowCTA}
          className='friend-card__icon-wrap'
        >
          {tabType === FRIENDS_TAB_TYPES.MY_FRIENDS && (
            <MdDeleteForever
              onClick={handleModalDeleteMyFriend}
              className='friend-card__icon--delete'
            />
          )}
          {tabType === FRIENDS_TAB_TYPES.REQUEST && (
            <>
              <AiOutlineClose
                onClick={handleDeleteFriendshipClick(
                  FRIENDS_CTA_BUTTON_TYPES.DECLINE
                )}
                className='friend-card__icon--decline'
              />
              <AiOutlineCheck
                onClick={handleAcceptFriendshipClick(
                  FRIENDS_CTA_BUTTON_TYPES.ACCEPT
                )}
                className='friend-card__icon--accept'
              />
            </>
          )}
          {tabType === FRIENDS_TAB_TYPES.SENT && (
            <AiOutlineClose
              onClick={handleDeleteFriendshipClick(
                FRIENDS_CTA_BUTTON_TYPES.CANCEL
              )}
              className='friend-card__icon--cancel'
            />
          )}
        </FriendCardIcons>
      </FriendCardContainer>
    </>
  );
}

FriendCard.propTypes = {
  friend: PropTypes.object.isRequired,
  tabType: PropTypes.string.isRequired,
};

export default FriendCard;
