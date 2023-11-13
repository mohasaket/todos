import React from "react";

interface Props {
  onSubmit: (term: string) => void;
}
const SearchBar = ({ onSubmit }: Props) => {
  const handleClick = () => {
    onSubmit("cars");
  };
  return (
    <div>
      <input />
      <button className="button" onClick={handleClick}>
        Click ME !!
      </button>
    </div>
  );
};

export default SearchBar;
