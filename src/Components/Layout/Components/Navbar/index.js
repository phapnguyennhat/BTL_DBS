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
      <Link to="/student" className={cx("navbar-link")}>
        <div className={cx("navbar-link-item")}>
          <i class="fa-solid fa-users"></i>
          <span className={cx("navbar-link-text")}>Học Viên</span>
        </div>
      </Link>
      <Link to="/teacher" className={cx("navbar-link")}>
        <div className={cx("navbar-link-item")}>
          <i class="fa-solid fa-users"></i>
          <span className={cx("navbar-link-text")}>Giảng Viên</span>
        </div>
      </Link>
      <Link to="/courses" className={cx("navbar-link")}>
        <div className={cx("navbar-link-item")}>
          <i class="fa-solid fa-book"></i>
          <span className={cx("navbar-link-text")}>Khóa Học</span>
        </div>
      </Link>
    </div>
  );
}
export default Navbar;
