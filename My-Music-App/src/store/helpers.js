export const parseLikesDislikes = (str) => {
  const likesMatch = str.match(/Likes: (\d+)/);
  const dislikesMatch = str.match(/Dislikes: (\d+)/);
  return {
    likes: likesMatch ? parseInt(likesMatch[1]) : 0,
    dislikes: dislikesMatch ? parseInt(dislikesMatch[1]) : 0,
  };
};
