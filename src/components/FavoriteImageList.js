import FavoriteImage from "./FavoriteImage";
import "./FavoriteImageList.css";

export default function FavoriteImageList({ photoIds }) {
  return (
    <div className="favorite_image_container">
      {photoIds.map((photoId) => (
        <FavoriteImage key={photoId} photoId={photoId} />
      ))}
    </div>
  );
}
