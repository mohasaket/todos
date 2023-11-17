import React from "react";
import ImageShow from "./ImageShow";
interface Props {
  images: {
    id: string;
    urls: {
      small: string;
    };
    alt_description: string;
  }[];
}

const ImageList = ({ images }: Props) => {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return (
    <>
      <h1>here is your result</h1>
      <ul className="list-image flex w-full justify-between">
        <li>{renderedImages}</li>
      </ul>
    </>
  );
};

export default ImageList;
