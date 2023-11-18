import React, { useState } from "react";

const AddColor = () => {
  const [colors, setColors] = useState<string[]>([]);
  const addColorAtIndex = (newColor: string, index: number) => {
    const UpdateColors = [
      ...colors.slice(0, index),
      newColor,
      ...colors.slice(index),
    ];
    setColors(UpdateColors);
  };
  const renderedColors = colors.map((color, i) => {
    return <li key={i}>{color}</li>;
  });
  return <div>ss{renderedColors}</div>;
};

export default AddColor;
