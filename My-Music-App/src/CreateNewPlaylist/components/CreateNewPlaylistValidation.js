export const Validate = (values) => {
  const error = {};
  if (values.playlistLogo) {
    const fileSizeKiloBytes = values.playlistLogo.size / 1024;
    if (fileSizeKiloBytes > 10240) {
      error.playlistLogo =
        "File size exceeds the maximum allowed. Please select an image which is smaller than 10 MB.";
    }
  }
  if (values.playlistName && values.playlistName.length < 3) {
    error.playlistName =
      "Too short, playlist name should be between 3 and 50 characters in length.";
  } else if (values.playlistName && values.playlistName.length > 50) {
    error.playlistName =
      "Too big, playlist name should be between 3 and 50 characters in length.";
  }
  if (values.description && values.description.length < 3) {
    error.description =
      "Too short, playlist description should be between 3 and 1000 characters in length.";
  } else if (values.description && values.description.length > 1000) {
    error.description =
      "Too big, playlist description should be between 3 and 1000 characters in length.";
  }
  return error;
};
