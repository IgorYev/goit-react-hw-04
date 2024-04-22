import ImageCard from "../ImageCard/ImageCard";
import styles from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ items, openModal }) {
  return (
    <ul className={styles.ImageGallery}>
      {items.map((item) => (
        <li key={item.id} onClick={() => openModal(item.urls.regular)}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
}
