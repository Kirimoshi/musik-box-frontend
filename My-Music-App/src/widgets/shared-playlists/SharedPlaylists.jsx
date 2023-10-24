import React, { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchSharedPlaylists } from '../../store/shared-playlists/shared-playlists.thunks';
import {
  sharedPlaylistsErrorSelector,
  sharedPlaylistsLoadingSelector,
  sharedPlaylistsMetadataSelector,
} from '../../store/shared-playlists/shared-playlists.selector';

import Header from '../../shared/ui/header/Header';
import SharedPlaylistList from '../../entities/shared-playlists/ui/shared-playlist-list/SharedPlaylistList';
import Pagination from '../../shared/Pagination';

import {
  Container,
  ContentWrapper,
  InputWrapper,
} from '../public-playlists/PublicPLaylists.styles';
import { isAuthenticatedSelector } from '../../store/user/user.selector';
import InputComponent from '../../shared/ui/input/Input';
import { AiOutlineSearch } from 'react-icons/ai';

function SharedPlaylists() {
  const dispatch = useDispatch();
  const error = useSelector(sharedPlaylistsErrorSelector);
  const loading = useSelector(sharedPlaylistsLoadingSelector);
  const { last } = useSelector(sharedPlaylistsMetadataSelector);
  const isAuth = useSelector(isAuthenticatedSelector);

  const [page, setPage] = useState(1);
  const [term, setTerm] = useState('');
  const onSearch = (e) => {
    const newTerm = e.target.value;
    setTerm(newTerm.trim().toLowerCase());
  };

  useEffect(() => {
    if (!isAuth) return;
    dispatch(fetchSharedPlaylists(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, isAuth]); // Dispatch is not a dependency, it remains unchanged from the initialization of store.

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  const onPageChange = useCallback(
    (changeDirection) => {
      if (changeDirection === 'left' && page !== 1) {
        setPage(page - 1);
      } else if (changeDirection === 'right' && page < last) {
        setPage(page + 1);
      }
    },
    [page, last]
  );

  return (
    <>
      {isAuth && ( // is displayed for all auth users
        <Container>
          <ContentWrapper>
            <Header title={'Shared Playlists'}></Header>
            <InputWrapper>
              <InputComponent
                type={'search'}
                placeholder={'Type something'}
                name={'search-bar'}
                onChange={onSearch}
                value={term}
                data-input-id='search-bar'
              />
              <AiOutlineSearch
                className='search-bar-icon'
                data-search-id='search-bar-icon'
              />
            </InputWrapper>
            <SharedPlaylistList className='shared-playlists' term={term} />
            <Pagination
              handleClick={onPageChange}
              isLeftActive={!loading && page !== 1}
              isRightActive={!loading && page < last}
            />
          </ContentWrapper>
        </Container>
      )}
    </>
  );
}

export default SharedPlaylists;
