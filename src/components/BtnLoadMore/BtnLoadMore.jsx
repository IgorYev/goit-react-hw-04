import css from "./BtnLoadMore.module.css";

export default function BtnLoadMore({ onClick }) {
  return (
    <div>
      <button className={css.Button} onClick={onClick} type="button">
        Load more
      </button>
    </div>
  );
}
