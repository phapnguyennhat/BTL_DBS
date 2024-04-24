import classNames from "classnames/bind";

import styles from "./GlobalStyles.scss";

const cx = classNames.bind(styles);

function GlobalStyles({ children }) {
  return children;
}
export default GlobalStyles;
