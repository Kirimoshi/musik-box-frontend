export default function parseLikesAndDislikes(inputString) {
  const regex = /Likes: (\d+) \/ Dislikes: (\d+)/;
  const match = inputString.match(regex);

  if (!match) return null;

  const likes = parseInt(match[1]);
  const dislikes = parseInt(match[2]);
  return { likes, dislikes };
}
