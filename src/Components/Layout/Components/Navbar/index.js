import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Navbar() {
  return (
    <div className={cx("navbar")}>
      <h2>Welcome Admin</h2>
      <div className={cx("user-admin")}>
        <i class="fa-regular fa-circle-user"></i>
      </div>
      <Link to="/" className={cx("navbar-link")}>
        <div className={cx("navbar-link-item")}>
          <i class="fa-solid fa-house"></i>
          <span className={cx("navbar-link-text")}>Trang Chủ</span>
        </div>
      </Link>
      <Link to="/user" className={cx("navbar-link")}>
        <div className={cx("navbar-link-item")}>
          <i class="fa-solid fa-users"></i>
          <span className={cx("navbar-link-text")}>Người Dùng</span>
        </div>
      </Link>
    </div>
  );
}
export default Navbar;
