import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div>
      <button className={css.Button} onClick={onClick} type="button">
        Load more
      </button>
    </div>
  );
}
