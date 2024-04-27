import classNames from "classnames/bind";
import TextField from "@mui/material/TextField";

import styles from "./Student.module.scss";
import ButtonAdd from "~/Components/ButtonAdd";
import RowData from "./Components/RowData";
import { useState } from "react";
import ModalStu from "./Components/ModalStu";
import { Modal } from "@mui/material";

const cx = classNames.bind(styles);
function Student() {
  const [displayModal, setDisplayModal] = useState(false);
  const [rowToAction, setRowToAction] = useState(null);
  console.log(displayModal);
  return (
    <div className={cx("content")}>
      <div className={cx("header-page")}>
        <h1>Danh sách Học Viên</h1>

        <ButtonAdd
          text={"+ Thêm Học Viên"}
          onclick={() => setDisplayModal(true)}
        />
      </div>

      <div className="search">
        <TextField
          id="outlined-basic"
          label="Tìm Kiếm"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
      </div>
      <table className={cx("table-stu")}>
        <thead>
          <th>ID</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Số Điện Thoại</th>
          <th>Mật Khẩu</th>

          <th>Thao tác</th>
        </thead>
        <tbody>
          <RowData />
        </tbody>
      </table>
      <ModalStu />
    </div>
  );
}
export default Student;
