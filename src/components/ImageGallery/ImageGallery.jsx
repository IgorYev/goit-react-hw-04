import ImageCard from "../ImageCard/ImageCard";
import styles from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={styles.ImageGallery}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard onImageClick={onImageClick} item={item} />
        </li>
      ))}
    </ul>
  );
}
