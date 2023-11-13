import { useState } from "react";
import AnimalShow from "./Components/Animal/AnimalShow";
import "./App.css";
const getRandomAnimal = () => {
  const animals = ["bird", "cow", "cat", "horse", "dog", "gator"];
  return animals[Math.floor(animals.length * Math.random())];
};

function App() {
  const [animals, setAnimals] = useState([""]);
  const handelClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  const renderAnimals = animals.map((animal: any, index: number) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <div className="app">
      <button
        onClick={handelClick}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        AddAnimal
      </button>

      <div className="animal-list">{renderAnimals}</div>
    </div>
  );
}

export default App;
