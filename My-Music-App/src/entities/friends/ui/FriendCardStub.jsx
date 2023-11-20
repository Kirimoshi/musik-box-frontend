import React from 'react';
import PropTypes from 'prop-types';
import { StubMessageContainer } from './FriendCard.styles';

function FriendCardStub({ message }) {
  return <StubMessageContainer>{message}</StubMessageContainer>;
}

FriendCardStub.propTypes = {
  message: PropTypes.string,
};

export default FriendCardStub;
