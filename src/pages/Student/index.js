import classNames from "classnames/bind";
import TextField from "@mui/material/TextField";

import styles from "./Student.module.scss";
import ButtonAdd from "~/Components/ButtonAdd";
import RowData from "./Components/RowData";
import { useEffect, useState } from "react";
import ModalStu from "./Components/ModalStu";
import { resolvePath } from "react-router-dom";
import { GET_STUDENT, get_Student } from "~/services/API_DBS";
import ConfirmDelete from "~/Components/ConfirmDelete";

const cx = classNames.bind(styles);
function Student() {
  const [displayModal, setDisplayModal] = useState(false);
  const [rowToAction, setRowToAction] = useState(null);
  const [displayConfirm, setDisplayConfirm] = useState(false);
  const [dataStu, setDataStu] = useState([]);
  useEffect(() => {
    get_Student().then((data) => {
      setDataStu(data["data"] ?? []);
    });
  }, []);
  return (
    <div className="content">
      <div className="header-page">
        <h1>Danh sách Học Viên</h1>

        <ButtonAdd
          text={"+ Thêm Học Viên"}
          onclick={() => {
            setDisplayModal(true);
            setRowToAction(null);
          }}
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
          <th>Họ Và Tên</th>
          <th>Giới Tính</th>
          <th>Email</th>
          <th>Số Điện Thoại</th>
          <th>Ngày Sinh</th>
          <th>Địa Chỉ</th>

          <th>Thao tác</th>
        </thead>
        <tbody>
          {dataStu.map((stu, index) => {
            return (
              <RowData
                studentId={stu.studentId}
                fullName={stu.fullName}
                gender={stu.gender}
                email={stu.email}
                bdate={stu.bdate}
                addr={stu.addr}
                phoneNumber={stu.phoneNumber}
                setDisplayConfirm={setDisplayConfirm}
                setRowToAction={setRowToAction}
                setDisplayModal={setDisplayModal}
              />
            );
          })}
        </tbody>
      </table>
      {displayModal && (
        <ModalStu
          setDisplayModal={setDisplayModal}
          rowToAction={rowToAction}
          setDataStu={setDataStu}
          dataStu={dataStu}
        />
      )}
      {
        <ConfirmDelete
          displayConfirm={displayConfirm}
          setDisplayConfirm={setDisplayConfirm}
          rowToAction={rowToAction}
          student
          setDataStu={setDataStu}
        />
      }
    </div>
  );
}
export default Student;
