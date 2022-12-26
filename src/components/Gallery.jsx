import React from "react";
import milk from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import orang from "../assets/images/desktop/image-gallery-orange.jpg";
import cone from "../assets/images/desktop/image-gallery-cone.jpg";
import suger from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <img src={milk} alt="Milk" />
      <img src={orang} alt="Orange" />
      <img src={cone} alt="Cone" />
      <img src={suger} alt="Suger" />
    </div>
  );
};

export default Gallery;
