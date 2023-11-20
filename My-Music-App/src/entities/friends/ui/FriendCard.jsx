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

  // MODAL
  const [modalOptions, setModalOptions] = useState({
    isModalOpen: false,
    actionButtonText: '',
    closeButtonText: '',
    title: '',
    onClose: () => {},
    onAction: () => {},
  });

  // Close modal
  const handleCloseModal = () =>
    setModalOptions({ ...modalOptions, isModalOpen: false });

  // Delete existing frindship
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
      <FriendCardContainer>
        <ModalDialog
          className='friend-card__modal--delete'
          options={modalOptions}
        />
        <FriendCardAvatar>
          <img
            src={
              profilePicture
                ? `${UPLOADS_URL}/${profilePicture.storage}/${profilePicture.id}`
                : require('../../../shared/assets/default_user_avatar.jpg')
            }
            alt={`${nickname} avatar`}
          />
        </FriendCardAvatar>
        <FriendCardCaption>
          <FriendCardCaptionItemName>
            {capitalizeWords(nickname)}
          </FriendCardCaptionItemName>
          <FriendCardCaptionItem>{email}</FriendCardCaptionItem>
          <FriendCardCaptionItem>
            <AiOutlineShareAlt />
            <span>{`${numOfSharedPlaylists ?? '0'} shared playlists`}</span>
          </FriendCardCaptionItem>
          <FriendCardCaptionItem>
            {`${TEXT_FOR_DATA_FIELDS[tabType]}: ${formattedUpdateDate}`}
          </FriendCardCaptionItem>
        </FriendCardCaption>
        <FriendCardIcons $tabType={tabType} $isIconActive={shouldAllowCTA}>
          {tabType === FRIENDS_TAB_TYPES.MY_FRIENDS && (
            <MdDeleteForever onClick={handleModalDeleteMyFriend} />
          )}
          {tabType === FRIENDS_TAB_TYPES.REQUEST && (
            <>
              <AiOutlineClose
                onClick={handleDeleteFriendshipClick(
                  FRIENDS_CTA_BUTTON_TYPES.DECLINE
                )}
              />
              <AiOutlineCheck
                onClick={handleAcceptFriendshipClick(
                  FRIENDS_CTA_BUTTON_TYPES.ACCEPT
                )}
              />
            </>
          )}
          {tabType === FRIENDS_TAB_TYPES.SENT && (
            <AiOutlineClose
              onClick={handleDeleteFriendshipClick(
                FRIENDS_CTA_BUTTON_TYPES.CANCEL
              )}
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
