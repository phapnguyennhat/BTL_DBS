import classNames from "classnames/bind";
import TextField from "@mui/material/TextField";

import styles from "./Use.module.scss";

const cx = classNames.bind(styles);
function User() {
  return (
    <div className={cx("content")}>
      <div className={cx("header-page")}>
        <h1>Quản Lý Người Dùng</h1>
        <TextField
          id="outlined-basic"
          label="Tìm Kiếm"
          variant="outlined"
          autoComplete="off"
          cx={{ width: 50 }}
        />
      </div>
    </div>
  );
}
export default User;
