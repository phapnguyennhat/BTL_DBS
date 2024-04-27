import { Button } from "@mui/material";
import styles from "./ButtonAdd.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ButtonAdd({ onclick, text }) {
  return (
    <button onClick={onclick} className={cx("btn")}>
      {text}
    </button>
  );
}

export default ButtonAdd;
