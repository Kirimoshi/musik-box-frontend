export const constants = {
  commentMinLength: 10,
  commentMaxLength: 1000,
  timeOut: 60000,
  timerLength: 2,
  errorMsg: 'Oops, looks like something went wrong. Please try again later.',
  daysInMilliseconds: 86400000,
};

export const BACKEND_ERROR_MSGS = {
  COMMENT_LIMIT_EXCEEDED: 'you cannot add more than 3 comments in 60 minute.', // yes, in 60 minute. It is a real message from back-end
};

export const TOAST_MESSAGES = {
  SUCCESS: 'Your comment has been added successfully',
  ERROR: 'An error occurred while adding your comment',
  PENDING: 'Adding your comment...',
};
