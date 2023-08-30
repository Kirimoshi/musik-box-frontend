export const parseLikesDislikes = (str) => {
  const likesMatch = str.match(/Likes: (\d+)/);
  const dislikesMatch = str.match(/Dislikes: (\d+)/);
  return {
    likes: likesMatch ? parseInt(likesMatch[1]) : 0,
    dislikes: dislikesMatch ? parseInt(dislikesMatch[1]) : 0,
  };
};

export const formatDateDDmmmYYYY = (dateString, locale = "en-GB") =>
  new Date(dateString).toLocaleDateString(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
