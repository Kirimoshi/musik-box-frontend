import React from 'react';
import PropTypes from 'prop-types';
import {
  TopUserList,
  TopUserSubtitle,
  TopUserTitle,
} from './TopUsersList.styles';
import { TOP_USERS_TEXT_FIELD_TYPE } from '../constants/constants';
import TopUserCard from './TopUserCard';
import { capitalize } from '../../../../store/helpers';

function TopUsers({ title, subtitle, usersList, textFieldType }) {
  const isUsersListEmpty = !usersList?.length;
  return (
    <section className='top-users'>
      {title && (
        <TopUserTitle className='top-users__title test'>{title}</TopUserTitle>
      )}
      {!isUsersListEmpty && (
        <TopUserSubtitle className='top-users__subtitle'>
          {subtitle}
        </TopUserSubtitle>
      )}
      <TopUserList>
        {usersList?.map(
          ({
            id,
            attributes: {
              friends_count: friendCount,
              playlists_number: playlistsNumber,
              nickname,
              profile_picture: profilePicture,
            },
          }) => {
            let textField;
            switch (textFieldType) {
              case TOP_USERS_TEXT_FIELD_TYPE.FRIENDS:
                textField = `${capitalize(
                  TOP_USERS_TEXT_FIELD_TYPE.FRIENDS
                )}: ${friendCount} `;
                break;
              case TOP_USERS_TEXT_FIELD_TYPE.PLAYLISTS:
                textField = `${capitalize(
                  TOP_USERS_TEXT_FIELD_TYPE.PLAYLISTS
                )}: ${playlistsNumber}`;
                break;
              default:
                textField = '';
                console.error('Wrong text field type');
                break;
            }

            return (
              <TopUserCard
                key={id}
                textField={textField}
                profilePicture={profilePicture}
                nickname={nickname}
              />
            );
          }
        )}
      </TopUserList>
    </section>
  );
}

TopUsers.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  textFieldType: PropTypes.string,
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      attributes: PropTypes.shape({
        friends_count: PropTypes.number,
        playlists_number: PropTypes.number,
        nickname: PropTypes.string.isRequired,
        profile_picture: PropTypes.oneOfType([
          PropTypes.shape({
            id: PropTypes.string,
            storage: PropTypes.string,
          }),
          PropTypes.oneOf([null]),
        ]),
      }),
    })
  ),
};

export default TopUsers;
