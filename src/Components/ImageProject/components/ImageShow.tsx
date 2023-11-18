import React from "react";
export interface Props {
  image: {
    urls: {
      small: string;
    };
    alt_description: string;
  };
}
const ImageShow = ({ image }: Props) => {
  return (
    <div>
      <h1>{image.alt_description}</h1>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageShow;
