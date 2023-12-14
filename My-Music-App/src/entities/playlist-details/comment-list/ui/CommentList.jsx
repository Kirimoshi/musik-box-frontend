import React, { useCallback, useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { AiOutlineCloseCircle } from 'react-icons/ai';

import { Validate } from '../lib/utils/CommentValidations';
import {
  BACKEND_ERROR_MSGS,
  constants,
  TOAST_MESSAGES,
} from '../constants/constansts';

import { useDispatch, useSelector } from 'react-redux';
import {
  playlistDetailsErrorSelector,
  playlistDetailsLoadingSelector,
  playlistDetailsSelector,
} from '../../../../store/playlist-details/playlist-details.selector';
import {
  addCommentToPlaylist,
  fetchPlaylistComments,
} from '../../../../store/playlist-details/playlist-details.thunks';
import { useLocation, useParams } from 'react-router-dom';
import {
  FETCH_PLAYLISTS_TYPES,
  UPLOADS_URL,
} from '../../../../store/constants';
import Pagination from '../../../../shared/Pagination';
import {
  CommentAuthorAvatar,
  CommentAuthorEmail,
  CommentAuthorInfo,
  CommentAuthorName,
  CommentAuthorTextWrapper,
  CommentClearButton,
  CommentContainer,
  CommentDate,
  CommentDescription,
  CommentDivider,
  CommentError,
  CommentListContainer,
  CommentsHeader,
  CommentsSection,
  CommentSubmitButton,
  CommentTextField,
  NewCommentForm,
} from './CommentList.styles';
import { isAuthenticatedSelector } from '../../../../store/user/user.selector';
import { baseToastConfig, OneLineMessage } from '../../../../shared/Toasts';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import paths from '../../../../router/paths';

export default function CommentList() {
  const dispatch = useDispatch();
  let location = useLocation();
  const isAuth = useSelector(isAuthenticatedSelector);
  const { id } = useParams();
  const [newComment, setNewComment] = useState('');
  const [commentErrors, setCommentErrors] = useState({});
  const {
    commentsInfo: {
      comments,
      metadata: { commentsCount, lastPage },
    },
  } = useSelector(playlistDetailsSelector);
  const loading = useSelector(playlistDetailsLoadingSelector);
  const error = useSelector(playlistDetailsErrorSelector);
  const [commentsPage, setCommentsPage] = useState(1);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTimestamp, setLastClickTimestamp] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [playlistTypeToDisplay, setPlaylistTypeToDisplay] = useState('');
  const toastId = useRef(null);
  const clearComment = () => {
    setNewComment('');
  };

  //TODO Possibly consider rewriting for displaying different time intervals depending on their age (years, months, days, hours, minutes, seconds)
  const getCommentAge = (createdAtZ) => {
    const currentDate = new Date();
    const commentDate = new Date(createdAtZ);
    const commentAge = currentDate - commentDate;
    return Math.floor(commentAge / constants.daysInMilliseconds);
  };
  //TODO Fix toasts
  const notify = useCallback(() => {
    toastId.current = toast(
      <OneLineMessage message={TOAST_MESSAGES.PENDING} />,
      baseToastConfig
    );
  }, []);

  const notifyCommentError = useCallback(() => {
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
    if (isFormSubmitted && loading) {
      notify();
    }
    if (isFormSubmitted && !loading && error) {
      notifyCommentError();
      setIsFormSubmitted(false);
    }
    if (isFormSubmitted && !loading && !error) {
      notifySuccess();
      setIsFormSubmitted(false);
    }
  }, [
    isFormSubmitted,
    loading,
    error,
    notifyCommentError,
    notify,
    notifySuccess,
  ]);

  useEffect(() => {
    if (location.pathname.includes(paths.publicPlaylistDetails)) {
      setPlaylistTypeToDisplay(FETCH_PLAYLISTS_TYPES.PUBLIC);
      return;
    }
    if (location.pathname.includes(paths.myPlaylistDetails)) {
      setPlaylistTypeToDisplay(FETCH_PLAYLISTS_TYPES.MY);
      return;
    }
    if (location.pathname.includes(paths.sharedPlaylistDetails)) {
      setPlaylistTypeToDisplay(FETCH_PLAYLISTS_TYPES.SHARED);
    }
  }, [location.pathname]);

  useEffect(() => {
    dispatch(
      fetchPlaylistComments({
        playlistId: id,
        playlistTypeToDisplay: playlistTypeToDisplay,
        page: commentsPage,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, commentsPage]); // Dispatch is not a dependency because it is a function that never changes

  useEffect(() => {
    setCommentErrors(Validate(newComment));
  }, [newComment]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClickCount(0);
      setLastClickTimestamp(null);
      setIsButtonDisabled(false);
    }, constants.timeOut);
    return () => clearTimeout(timer);
  }, [clickCount]);

  const handleClick = () => {
    const currentTime = Date.now();
    setCommentErrors({});
    if (
      currentTime - lastClickTimestamp <= constants.timeOut &&
      clickCount >= constants.timerLength
    ) {
      setIsButtonDisabled(true);
    } else {
      setClickCount((prevClickCount) => prevClickCount + 1);
      setLastClickTimestamp(currentTime);
    }
    dispatch(addCommentToPlaylist(newComment)).then(() => {
      clearComment();
      setIsFormSubmitted(true);
    });
  };

  const onPageChange = useCallback(
    (changeDirection) => {
      if (changeDirection === 'left' && commentsPage !== 1) {
        setCommentsPage((commentsPage) => commentsPage - 1);
      } else if (changeDirection === 'right' && commentsPage < lastPage) {
        setCommentsPage((commentsPage) => commentsPage + 1);
      }
    },
    [commentsPage, lastPage]
  );

  const commentPasteHandler = (e) => {
    e.preventDefault();
    setNewComment(e.clipboardData.getData('text/plain'));
  };

  useEffect(() => {
    if (!error) return;
    if (error === BACKEND_ERROR_MSGS.COMMENT_LIMIT_EXCEEDED) {
      setIsButtonDisabled(true);
    }
  }, [error]);

  return (
    <CommentsSection>
      <CommentsHeader>
        Comments{' '}
        {comments.length === 0 ? (
          <p className='header__no-comments-msg'>There are no comments yet</p>
        ) : (
          <span className='header__comments-count'>{commentsCount}</span>
        )}
      </CommentsHeader>
      {isAuth && (
        <NewCommentForm name='new-comment-form'>
          <fieldset>
            <legend>Comment</legend>
            <CommentTextField
              name='new-comment'
              id='new-comment'
              form='new-comment-form'
              required
              placeholder='Unsurpassed, magical, super duper'
              value={newComment}
              onChange={(e) => {
                setNewComment(e.target.value);
              }}
              onPaste={commentPasteHandler}
            />
            <CommentClearButton
              type={'reset'}
              form={'new-comment-form'}
              name={'comment-clear-btn'}
              className='comment-form__clear-btn'
              onClick={() => clearComment()}
            >
              <AiOutlineCloseCircle className='clear-icon' />
            </CommentClearButton>
          </fieldset>
        </NewCommentForm>
      )}
      <Tippy
        placement='right'
        content='You cannot add more than 3 comments in 1 minute.'
        disabled={!isButtonDisabled}
        className='comment-form__tooltip'
      >
        <CommentSubmitButton
          type={'submit'}
          form={'new-comment-form'}
          name={'comment-submit-btn'}
          className={`${
            !isAuth || commentErrors.input || isButtonDisabled || loading
              ? 'comment-form__submit-btn button-disable'
              : 'comment-form__submit-btn'
          }`}
          disabled={!isAuth || commentErrors.input || loading}
          onClick={() => {
            handleClick();
          }}
        >
          Leave a comment
        </CommentSubmitButton>
      </Tippy>
      <CommentError className='comment-form__error-msg'>
        {commentErrors.input}
      </CommentError>
      <CommentListContainer className='comments__list'>
        {comments.map(
          ({ id, userName, userEmail, userPicture, createdAtZ, content }) => {
            const userPictureUrl = userPicture
              ? `${UPLOADS_URL}/${userPicture.storage}/${userPicture.id}`
              : require('../../../../shared/assets/default_user_avatar_small.png');
            return (
              <CommentContainer key={id} className={`comment-${id}__details`}>
                <CommentAuthorInfo>
                  <CommentAuthorAvatar
                    src={userPictureUrl}
                    alt={`${userName} avatar`}
                    className={`comment__avatar`}
                  />
                  <CommentAuthorTextWrapper>
                    <CommentAuthorName className={`comment__author-name`}>
                      {userName}
                    </CommentAuthorName>
                    <CommentAuthorEmail className={`comment__author-email`}>
                      {userEmail}
                    </CommentAuthorEmail>
                  </CommentAuthorTextWrapper>
                </CommentAuthorInfo>
                <CommentDescription className={`comment__content`}>
                  {content}
                </CommentDescription>
                <CommentDate className={`comment__age`}>
                  {`${getCommentAge(createdAtZ)} days ago`}
                </CommentDate>
                <CommentDivider />
              </CommentContainer>
            );
          }
        )}
      </CommentListContainer>
      {comments.length === 0 ? null : (
        <Pagination
          handleClick={onPageChange}
          isLeftActive={!loading && commentsPage !== 1}
          isRightActive={!loading && commentsPage < lastPage}
          marginBottom='12px'
        />
      )}
    </CommentsSection>
  );
}

CommentList.propTypes = {
  playlistTypeToDisplay: PropTypes.string,
};
