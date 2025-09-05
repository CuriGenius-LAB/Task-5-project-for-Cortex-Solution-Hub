import style from "../assets/css/gallery.module.css";

const GalleryItem = ({ src, alt, text }) => {
  return (
    <div className={style.galleryItem}>
      <img src={src} alt={alt} loading="lazy"   />
      <div className={style.overlay}>{text}</div>
    </div>
  );
};

export default GalleryItem;
