import "./app.css";
import ImagePreview from "./components/ImagePreview";
import { useState } from "react";
import { getRandomImage } from "./api/getRandomImage";
import FavoriteImageList from "./components/FavoriteImageList";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  return (
    <main>
      <button className="random_button" onClick={() => handleClick()}>
        Show me a random Image
      </button>
      {randomImage && (
        <ImagePreview
          id={randomImage.id}
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
        />
      )}
      <FavoriteImageList
        photoIds={["UjD08DRW24E", "k38v31SkZdo", "AW_P_NU9MI8"]}
      />
    </main>
  );
}

export default App;
