import styles from "../ImageCard/ImageCard.module.css";

export default function ImageCard({ item }) {
  return (
    <ul>
      <li className={styles.ImageCard}>
        <img
          className={styles["ImageCard_item"]}
          src={item.urls.small}
          alt={item.alt_description}
        />
      </li>
    </ul>
  );
}
