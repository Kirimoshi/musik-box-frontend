import { constants } from '../../constants/constansts';

export const Validate = (value) => {
  const error = {};
  if (value && value.length < constants.commentMinLength) {
    error.input =
      'Too short, comment should be between 10 and 1000 characters in length.';
  } else if (value && value.length > constants.commentMaxLength) {
    error.input =
      'Too big, comment should be between 10 and 1000 characters in length.';
  }
  return error;
};
