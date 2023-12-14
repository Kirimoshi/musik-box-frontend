import { constants } from '../../constants/constants';

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const validateMyAccount = (myAccountDetails) => {
  const errors = {};
  if (myAccountDetails.profilePicture) {
    const fileSizeKiloBytes =
      myAccountDetails.profilePicture.size / constants.fileSizeConversion;
    if (fileSizeKiloBytes > constants.imageFileMaxSize) {
      errors.profilePicture =
        'File size exceeds the maximum allowed. Please select an image which is smaller than 10 MB.';
    } else {
      delete errors.profilePicture;
    }
  }

  if (constants.whitespaceRegex.test(myAccountDetails.nickname)) {
    errors.nickname = 'Please enter a nickname that does not include spaces';
  } else if (!constants.nicknameLengthRegex.test(myAccountDetails.nickname)) {
    errors.nickname =
      'Please enter a nickname that includes between 3 and 50 characters';
  } else {
    delete errors.nickname;
  }

  if (constants.whitespaceRegex.test(myAccountDetails.email)) {
    errors.email = 'Please enter a valid email address without any spaces';
  } else if (!constants.emailRegex.test(myAccountDetails.email)) {
    errors.email =
      'Please enter a valid email domain. Only dots, hyphens and underscores are allowed as special characters';
  } else {
    delete errors.email;
  }
  return errors;
};
