import "./FavoriteImage.css";

export default function FavoriteImage({ photoId }) {
  return (
    <img
      className="favorite_image"
      src={`https://source.unsplash.com/${photoId}`}
      alt="Favorite with photoId"
    />
  );
}
