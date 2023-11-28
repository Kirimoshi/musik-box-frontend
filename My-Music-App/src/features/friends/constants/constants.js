export const ADD_FRIEND_FETCH_ERROR_RESPONSES = {
  EXIST: 'Friendship already exists',
  NOT_FOUND:
    'It seems that user with provided email does not have an account on our platform',
  YOURSELF: `You can't send friendship to yourself`,
};

export const ADD_FRIEND_ERROR_TEXTS = {
  EXIST: `Request to this user already exist`,
  NOT_FOUND: `User with provided email does not have an account on our platform`,
  YOURSELF: `You can't send friendship to yourself`,
  DEFAULT: 'Something went wrong',
};
