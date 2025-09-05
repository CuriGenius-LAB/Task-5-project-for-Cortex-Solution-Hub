
import { Fragment } from "react";
import style from "../assets/css/gallery.module.css";
import GalleryItem from "./GalleryItem";


import cultureImg from "../assets/images/culture.jpg";
import foodImg from "../assets/images/food.jpg";
import medicineImg from "../assets/images/medicine.jpg";
import natureImg from "../assets/images/nature.jpg";
import spaceImg from "../assets/images/space.jpg";
import sportsImg from "../assets/images/sports.jpg";

const galleryData = [
  { id: 1 , src: cultureImg, alt: "Culture", text: "Cultural Performance" },
  { id: 2 , src: foodImg, alt: "Food", text: "Gourmet Cuisine" },
  { id: 3 , src: medicineImg, alt: "Medicine", text: "Medical Innovation" },
  { id: 4 , src: natureImg, alt: "Nature", text: "Autumn Pathway" },
  { id: 5 , src: spaceImg, alt: "Space", text: "Cosmic Wonder" },
  { id: 6 , src: sportsImg, alt: "Sports", text: "Speed & Motion" },
];

const ImageGallery = () => {
  return (
    <Fragment>
      <h1>Creative Image Gallery</h1>
      <div className={style.gallery}>
        {galleryData.map((item) => (
          <GalleryItem
            key={item.id}
            src={item.src}
            alt={item.alt}
            text={item.text}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default ImageGallery;
