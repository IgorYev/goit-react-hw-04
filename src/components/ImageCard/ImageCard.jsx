import styles from "../ImageCard/ImageCard.module.css";

export default function ImageCard({
  item: {
    urls: { small, regular },
    alt_description,
  },
  onImageClick,
}) {
  return (
    <ul>
      <li className={styles.ImageCard}>
        <img
          className={styles["ImageCard_item"]}
          onClick={() => onImageClick(regular)}
          src={small}
          alt={alt_description}
        />
      </li>
    </ul>
  );
}
