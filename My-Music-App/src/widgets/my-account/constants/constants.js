export const constants = {
  imageFileMaxSize: 10240,
  fileSizeConversion: 1024,
  nicknameMinLength: 3,
  nicknameMaxLength: 50,
  whitespaceRegex: /\s/g,
  nicknameLengthRegex: /^.{3,50}$/,
  emailRegex: /^[a-z0-9]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
};

export const TOAST_MESSAGES = {
  SUCCESS: 'Your account has been updated successfully',
  ERROR: 'An error occurred while updating your account',
  PENDING: 'Updating your account...',
};

export const DELETE_AVATAR_MODAL_MESSAGES = {
  TITLE: 'Are you sure to want to delete your profile picture?',
  ACTION: 'Yes',
  CLOSE: 'No',
};

export const LEAVE_PAGE_CONFIRMATION_MODAL = {
  TITLE: 'Are you sure you want to leave without saving changes?',
  ACTION: 'Yes',
  CLOSE: 'No',
};
