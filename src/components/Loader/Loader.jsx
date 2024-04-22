import { Rings } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.section}>
      <Rings
        visible={true}
        height="150"
        width="150"
        color="#6600ff"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
