import { useState } from "react";
import searchImages from "./Components/ImageProject/Api/api";
import ImageList from "./Components/ImageProject/components/ImageList";
import SearchBar from "./Components/ImageProject/components/SearchBar";

function App() {
  const [images, setImages] = useState([]);
  const handelSubmit = async (term: string) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <>
      <SearchBar onSubmit={handelSubmit} />
      <ImageList images={images} />
    </>
  );
}

export default App;
