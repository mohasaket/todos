import { useState } from "react";

const count = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [countState, setCountState] = useState(0);
  const handelClick = () => {
    setCountState(countState + 1);
  };

  return (
    <>
      <button
        onClick={handelClick}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        AddAnimal
      </button>
      <div>Number of Animal : {countState}</div>
    </>
  );
};

export default count;
