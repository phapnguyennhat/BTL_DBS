import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Navbar from "../Components/Navbar";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Navbar></Navbar>
      <div className={cx("content")}>{children}</div>
    </div>
  );
}

export default DefaultLayout;
