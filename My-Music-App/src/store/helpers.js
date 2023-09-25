/**
 * Parses a string to extract the number of likes and dislikes.
 *
 * @param {string | null} str - The string to parse. It should contain 'Likes: {number}' and 'Dislikes: {number}'.
 * @returns {Object} An object with 'likes' and 'dislikes' properties, each containing the parsed number of likes and dislikes. If no match is found, the value will be 0.
 */
export const parseLikesDislikes = (str) => {
  const likesMatch = str.match(/Likes: (\d+)/);
  const dislikesMatch = str.match(/Dislikes: (\d+)/);
  return {
    likes: likesMatch ? parseInt(likesMatch[1]) : 0,
    dislikes: dislikesMatch ? parseInt(dislikesMatch[1]) : 0,
  };
};

/**
 * Formats a date string into the format "DD MMM YYYY".
 *
 * @param {string} dateString - The date string to format. It should be in a format that can be parsed by the Date constructor.
 * @param {string} [locale="en-GB"] - The locale to use for formatting the date. Defaults to "en-GB".
 * @returns {string} The formatted date string.
 */
export const formatDateDDmmmYYYY = (dateString, locale = "en-GB") =>
  new Date(dateString).toLocaleDateString(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export const setUpCookie = (cookieName, cookieValue, cookieExpiresAt) => {
  document.cookie = `${cookieName}=${cookieValue}; max-age=${cookieExpiresAt}; path=/ SameSite=Strict; Secure`;
};

export const deleteCookie = (cookieName) => {
  document.cookie = `${cookieName}=; max-age=0; path=/ SameSite=Strict; Secure`;
};
