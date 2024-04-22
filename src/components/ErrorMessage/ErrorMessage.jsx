import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.section}>
      <p>Oops! Something went wrong! </p>
    </div>
  );
}
