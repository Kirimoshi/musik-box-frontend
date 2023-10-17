const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const constants = {
  API_URL: BASE_API_URL + '/api/v1/users',
  nicknameMinValueLength: 3,
  nicknameMaxValueLength: 50,
  passwordMinValueLength: 8,
  passwordMaxValueLength: 128,
  emailDomainErrorElement: 'Email is not a valid or active domain',
  emailExistingErrorElement: 'Email has already been taken',
  emailInvalidErrorElement: 'Email is invalid',
  nicknameExistingErrorElement: 'Nickname has already been taken',
};
