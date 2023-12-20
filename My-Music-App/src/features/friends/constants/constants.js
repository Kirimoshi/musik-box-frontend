export const ADD_FRIEND_FETCH_ERROR_RESPONSES = {
  EXIST: `Accepted friendship already exists`,
  PENDING: `Pending friendship already exists`,
  NOT_FOUND: `user with provided email does not have an account on our platform`,
  YOURSELF: `send friendship to yourself`,
};

export const ADD_FRIEND_ERROR_TEXTS = {
  EXIST: `This user is already on your friends list`,
  PENDING: `Friending request already exists with this user`,
  NOT_FOUND: `User with provided email does not have an account on our platform`,
  YOURSELF: `You can't send friendship to yourself`,
  DEFAULT: 'Something went wrong',
};
