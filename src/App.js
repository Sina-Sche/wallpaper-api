import "./app.css";
import ImagePreview from "./components/ImagePreview";
import { useState } from "react";
import { getRandomImage } from "./api/getRandomImage";
import FavoriteImageList from "./components/FavoriteImageList";
import { getFavorites } from "./api/storage";
import Button from "./components/Button";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }
  const favorites = getFavorites();
  return (
    <main>
      <Button
        className="random_button"
        onClick={() => handleClick()}
        buttonText={"Show me a random Image"}
      />
      {randomImage && (
        <ImagePreview
          id={randomImage.id}
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
        />
      )}
      <FavoriteImageList photoIds={favorites} />
    </main>
  );
}

export default App;
