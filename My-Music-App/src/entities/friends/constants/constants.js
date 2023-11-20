export const FRIENDS_TAB_TYPES = {
  MY_FRIENDS: 'myFriends',
  SENT: 'sent',
  REQUEST: 'request',
};

export const STUB_MESSAGES = {
  [FRIENDS_TAB_TYPES.MY_FRIENDS]: 'You have no friends yet :(',
  [FRIENDS_TAB_TYPES.SENT]:
    'There are no friend requests that you submitted still pending.',
  [FRIENDS_TAB_TYPES.REQUEST]: 'You have no new friend requests.',
};

export const FRIENDS_ICONS = {
  DELETE: 'delete',
  CHECK: 'check',
  CROSS: 'cross',
};

export const FRIENDS_CTA_BUTTON_TYPES = {
  NONE: 'none',
  ACCEPT: 'accept',
  DECLINE: 'decline',
  DELETE: 'delete',
  CANCEL: 'cancel',
};

export const TEXT_FOR_DATA_FIELDS = {
  [FRIENDS_TAB_TYPES.MY_FRIENDS]: 'Friends since',
  [FRIENDS_TAB_TYPES.SENT]: 'Request sent',
  [FRIENDS_TAB_TYPES.REQUEST]: 'Request received',
};
