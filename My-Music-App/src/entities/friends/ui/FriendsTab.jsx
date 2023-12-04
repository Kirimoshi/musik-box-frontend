import React, { useCallback, useEffect, useRef, useState } from 'react';
import FriendCard from './FriendCard';
import { FriendsList } from './FriendsTab.styles';
import {
  FRIENDS_CTA_BUTTON_TYPES,
  FRIENDS_TAB_TYPES,
  STUB_MESSAGES,
} from '../constants/constants';
import { useDispatch, useSelector } from 'react-redux';

import { userSelector } from '../../../store/user/user.selector';
import {
  friendsAcceptedPaginationDataSelector,
  friendsAcceptedSelector,
  friendsCTAClickedFriendNameSelector,
  friendsCTAClickedSelector,
  friendsErrorSelector,
  friendsLoadingSelector,
  friendsRecivedPaginationDataSelector,
  friendsRecivedSelector,
  friendsSentPaginationDataSelector,
  friendsSentSelector,
  shouldRefetchFriendsSelector,
} from '../../../store/friends/friends.selector';
import {
  fetchFriendsAccepted,
  fetchFriendsRecived,
  fetchFriendsSent,
} from '../../../store/friends/friends.thunks';
import { useLocation } from 'react-router-dom';
import paths from '../../../router/paths';
import Pagination from '../../../shared/Pagination';
import {
  setFriendsCTAClicked,
  setShouldRefetchFriends,
} from '../../../store/friends/friends.reducer';
import { toast } from 'react-toastify';
import {
  MessageWithChildren,
  OneLineMessage,
  baseToastConfig,
} from '../../../shared/Toasts';
import FriendCardStub from './FriendCardStub';
import { capitalizeWords } from '../../../store/helpers';
import { Spacer } from '../../../shared/Shared.styles';

function FriendsTab(props) {
  // hooks
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  // Selectors
  const {
    isAuthenticated: userIsAuth,
    loading: userIsLoading,
    isRehydrated: userIsRehydrated,
  } = useSelector(userSelector);
  const loading = useSelector(friendsLoadingSelector);
  const error = useSelector(friendsErrorSelector);
  const shouldRefetchFriends = useSelector(shouldRefetchFriendsSelector);
  const friendsCTAClicked = useSelector(friendsCTAClickedSelector);
  const friendsCTAClickedFriendName = useSelector(
    friendsCTAClickedFriendNameSelector
  );
  const acceptedFriends = useSelector(friendsAcceptedSelector);
  const acceptedFriendsPagination = useSelector(
    friendsAcceptedPaginationDataSelector
  );
  const sentFriends = useSelector(friendsSentSelector);
  const sentFriendsPagination = useSelector(friendsSentPaginationDataSelector);
  const recivedFriends = useSelector(friendsRecivedSelector);
  const recivedFriendsPagination = useSelector(
    friendsRecivedPaginationDataSelector
  );

  // State
  const [currentTab, setCurrentTab] = useState(null);
  const [currentFriends, setCurrentFriends] = useState([]);
  const [currentPagination, setCurrentPagination] = useState({
    page: 1,
    last: 1,
  });

  // Toasts
  const toastId = useRef(null);
  const notify = useCallback(() => {
    toastId.current = toast(
      <OneLineMessage message='Processing...' />,
      baseToastConfig
    );
  }, []);

  const notifyError = useCallback(() => {
    toast.update(toastId.current, {
      type: toast.TYPE.ERROR,
      autoClose: 1000,
      render: <OneLineMessage message='Something went wrong' />,
    });
  }, []);

  const notifySuccess = useCallback(() => {
    const friendName = capitalizeWords(friendsCTAClickedFriendName);

    function AcceptMessage() {
      return (
        <>
          <p>Friend request accepted.</p>
          <p>You are now connected with {friendName}</p>
        </>
      );
    }
    function DeclineMessage() {
      return (
        <>
          <p>Friend request declined.</p>
          <p>You have declined the friend request from {friendName}</p>
        </>
      );
    }
    function DeleteMessage() {
      return (
        <>
          <p>Friend deleted.</p>
          <p>You have deleted {friendName} from friends</p>
        </>
      );
    }
    function CancelMessage() {
      return (
        <>
          <p>Friend request canceled.</p>
          <p>Your friend request to {friendName} has been canceled.</p>
          <p>The request has been removed from their pending requests list</p>
        </>
      );
    }

    const childrens = {
      [FRIENDS_CTA_BUTTON_TYPES.ACCEPT]: <AcceptMessage />,
      [FRIENDS_CTA_BUTTON_TYPES.DECLINE]: <DeclineMessage />,
      [FRIENDS_CTA_BUTTON_TYPES.DELETE]: <DeleteMessage />,
      [FRIENDS_CTA_BUTTON_TYPES.CANCEL]: <CancelMessage />,
    };

    toast.update(toastId.current, {
      type: toast.TYPE.SUCCESS,
      autoClose: 1000,
      render: <MessageWithChildren children={childrens[friendsCTAClicked]} />,
    });
  }, [friendsCTAClicked, friendsCTAClickedFriendName]);

  // handlers
  const handlePaginationClick = (tab, pagination) => (direction) => {
    if (tab === FRIENDS_TAB_TYPES.MY_FRIENDS) {
      dispatch(
        fetchFriendsAccepted(
          direction === 'left' ? pagination.page - 1 : pagination.page + 1
        )
      );
    }
    if (tab === FRIENDS_TAB_TYPES.SENT) {
      dispatch(
        fetchFriendsSent(
          direction === 'left' ? pagination.page - 1 : pagination.page + 1
        )
      );
    }
    if (tab === FRIENDS_TAB_TYPES.REQUEST) {
      dispatch(
        fetchFriendsRecived(
          direction === 'left' ? pagination.page - 1 : pagination.page + 1
        )
      );
    }
  };

  // Create memoized fetch functions
  const conditionalFetchFriends = useCallback(
    (page = 1) => {
      if (currentTab === FRIENDS_TAB_TYPES.MY_FRIENDS) {
        dispatch(fetchFriendsAccepted(page));
      }
      if (currentTab === FRIENDS_TAB_TYPES.SENT) {
        dispatch(fetchFriendsSent(page));
      }
      if (currentTab === FRIENDS_TAB_TYPES.REQUEST) {
        dispatch(fetchFriendsRecived(page));
      }
    },
    [currentTab, dispatch]
  );

  // Effects
  // Toasts effects

  useEffect(() => {
    const isCTAClicked = friendsCTAClicked !== FRIENDS_CTA_BUTTON_TYPES.NONE;
    if (isCTAClicked && loading) {
      notify();
    }
    if (isCTAClicked && !loading && error) {
      notifyError();
      dispatch(setFriendsCTAClicked(FRIENDS_CTA_BUTTON_TYPES.NONE));
    }
    if (isCTAClicked && !loading && !error) {
      notifySuccess();
      dispatch(setFriendsCTAClicked(FRIENDS_CTA_BUTTON_TYPES.NONE));
    }
  }, [
    dispatch,
    error,
    friendsCTAClicked,
    loading,
    notify,
    notifyError,
    notifySuccess,
  ]);

  // Where we are now, and what we need to fetch
  // Current Tab
  useEffect(() => {
    let newCurrentTab = null;

    switch (pathname) {
      case `${paths.friends}/${paths.friendsMy}`:
        newCurrentTab = FRIENDS_TAB_TYPES.MY_FRIENDS;
        break;
      case `${paths.friends}/${paths.friendsSent}`:
        newCurrentTab = FRIENDS_TAB_TYPES.SENT;
        break;
      case `${paths.friends}/${paths.friendsRequest}`:
        newCurrentTab = FRIENDS_TAB_TYPES.REQUEST;
        break;
      default:
        return;
    }
    setCurrentTab(newCurrentTab);
  }, [pathname]);

  // Set current friends and pagination
  useEffect(() => {
    let newCurrentFriends = null;
    let newCurrentPagination = null;

    switch (currentTab) {
      case FRIENDS_TAB_TYPES.MY_FRIENDS:
        newCurrentFriends = acceptedFriends;
        newCurrentPagination = acceptedFriendsPagination;
        break;
      case FRIENDS_TAB_TYPES.SENT:
        newCurrentFriends = sentFriends;
        newCurrentPagination = sentFriendsPagination;
        break;
      case FRIENDS_TAB_TYPES.REQUEST:
        newCurrentFriends = recivedFriends;
        newCurrentPagination = recivedFriendsPagination;
        break;
      default:
        return;
    }

    setCurrentFriends(newCurrentFriends);
    setCurrentPagination(newCurrentPagination);
  }, [
    acceptedFriends,
    acceptedFriendsPagination,
    currentPagination,
    currentTab,
    recivedFriends,
    recivedFriendsPagination,
    sentFriends,
    sentFriendsPagination,
  ]);

  // Initial fetch
  useEffect(() => {
    if (!userIsAuth || !userIsRehydrated || userIsLoading) return;
    conditionalFetchFriends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab, userIsAuth, userIsLoading, userIsRehydrated]);

  // Refetch
  useEffect(() => {
    let newPaginationPage = +currentPagination.page;
    if (+currentPagination.page > 1 && currentFriends.length === 1)
      --newPaginationPage;

    if (shouldRefetchFriends) {
      conditionalFetchFriends(newPaginationPage);
      dispatch(setShouldRefetchFriends(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRefetchFriends]);

  return (
    <>
      <FriendsList className={`friends__tab--${currentTab}`}>
        {currentFriends.length !== 0 ? (
          currentFriends.map((friend) => {
            return (
              <FriendCard
                key={friend.id}
                friend={friend}
                tabType={currentTab}
              />
            );
          })
        ) : (
          <FriendCardStub message={STUB_MESSAGES[currentTab]} />
        )}
      </FriendsList>

      {currentPagination.last !== 1 ? (
        <Pagination
          isLeftActive={!loading && currentPagination.page > 1}
          isRightActive={
            !loading && currentPagination.page < currentPagination.last
          }
          handleClick={handlePaginationClick(currentTab, currentPagination)}
        />
      ) : (
        <Spacer $marginBottom='100' />
      )}
    </>
  );
}

export default FriendsTab;
