import { useState } from "react";
import AnimalShow from "./Components/Animal/AnimalShow";

function App() {
  const handelClick = () => {
    //
  };

  return (
    <>
      <button
        onClick={handelClick}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        AddAnimal
      </button>

      <AnimalShow />
    </>
  );
}

export default App;
