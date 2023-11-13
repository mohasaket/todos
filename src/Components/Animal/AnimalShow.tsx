import React, { useState } from "react";
import bird from "../../assets/images/animals/bird.svg";
import cat from "../../assets/images/animals/cat.svg";
import cow from "../../assets/images/animals/cow.svg";
import gator from "../../assets/images/animals/gator.svg";
import dog from "../../assets/images/animals/dog.svg";
import horse from "../../assets/images/animals/horse.svg";
import heart from "../../assets/images/animals/heart.svg";
import "./AnimalShow.css";
const AnimalSvgMap = {
  bird: bird,
  cat: cat,
  cow: cow,
  horse: horse,
  dog: dog,
  gator: gator,
};

type AnimalType = keyof typeof AnimalSvgMap;
export interface Props {
  type: AnimalType;
}
const AnimalShow = ({ type }: Props) => {
  const animalImage = AnimalSvgMap[type];
  if (!animalImage) {
    return <div>Invalid animal type</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [clicks, setClicks] = useState(0);

  const handelClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handelClick}>
      <img className="animal" src={animalImage} alt="animalImage" />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 * 10 * clicks + "px" }}
      />
    </div>
  );
};

export default AnimalShow;
