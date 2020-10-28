import ImagePreview from "./components/imagePreview";
import "./app.css";
import Button from "./components/Button";

function App() {
  return (
    <main>
      <Button />
      <ImagePreview
        src="https://images.unsplash.com/photo-1547185942-2b5661136b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
        alt={"Seaside"}
        author={"Fotograf"}
      />
    </main>
  );
}

export default App;
