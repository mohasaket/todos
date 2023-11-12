import { useState } from "react";
import AnimalShow from "./Components/Animal/AnimalShow";

const animals = ["bird", "cow", "cat", "horse", "dog", "gator"];
const getRandomAnimal = () => {
  return animals[Math.floor(animals.length * Math.random())];
};

function App() {
  const [animals, setAnimals] = useState([""]);
  const handelClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <>
      <button
        onClick={handelClick}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        AddAnimal
      </button>

      <div>{animals}</div>
      <AnimalShow />
    </>
  );
}

export default App;
