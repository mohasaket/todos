import React, { useState } from "react";

interface Props {
  onSubmit: (term: string) => void;
}
const SearchBar = ({ onSubmit }: Props) => {
  const [term, setTerm] = useState("");

  const handelChange = (event: any) => {
    setTerm(event.target.value);
  };

  const handelFormSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(term);
  };

  // const handleClick = () => {
  //   onSubmit("cars");
  // };
  return (
    <div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handelFormSubmit}
      >
        <h1>search you lovely images</h1>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={term}
          onChange={handelChange}
        />

        {/* <button className="button" onClick={handleClick}>
          Click ME !!
        </button> */}
      </form>
    </div>
  );
};

export default SearchBar;
