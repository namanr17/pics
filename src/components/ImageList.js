import React from "react";

const ImageList = props => {
  const images = props.images.map(image => {
    return (
      <img
        key={image.id}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    );
  });

  return <div className="ui small images">{images}</div>;
};

export default ImageList;
