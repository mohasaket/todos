import searchImages from "./Components/ImageProject/Api/api";
import ImageList from "./Components/ImageProject/components/ImageList";
import SearchBar from "./Components/ImageProject/components/SearchBar";

function App() {
  const handelSubmit = (term: string) => {
    console.log("do search" + " " + term);
    searchImages(term);
  };

  return (
    <>
      <SearchBar onSubmit={handelSubmit} />
      <ImageList />
    </>
  );
}

export default App;
