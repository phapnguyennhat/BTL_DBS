import classNames from "classnames/bind";
import styles from "./ListCourse.module.scss";
import { stepLabelClasses } from "@mui/material";

const cx = classNames.bind(styles);

function ListCourse() {
  return (
    <div className={cx("background")}>
      <div className={cx("content")}>
        <table className="table-big">
          <thead>
            <th>Mã Khóa Học</th>
            <th>Tên Khóa Học</th>
            <th>Giá Tiền</th>
            <th>ID Giảng Viên</th>
            <th>Trình Độ Yêu Cầu</th>
            <th>Tiến Độ</th>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default ListCourse;
