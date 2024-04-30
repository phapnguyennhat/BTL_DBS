import classNames from "classnames/bind";
import TextField from "@mui/material/TextField";

import styles from "./Student.module.scss";
import ButtonAdd from "~/Components/ButtonAdd";
import RowData from "./Components/RowData";
import { useEffect, useState } from "react";
import ModalStu from "./Components/ModalStu";
import { resolvePath, useNavigate } from "react-router-dom";
import { GET_STUDENT, get_Student } from "~/services/API_DBS";
import ConfirmDelete from "~/Components/ConfirmDelete";
import { convertFieldResponseIntoMuiTextFieldProps } from "@mui/x-date-pickers/internals";

const cx = classNames.bind(styles);
function Student() {
  const [displayModal, setDisplayModal] = useState(false);
  const [rowToAction, setRowToAction] = useState(null);
  const [displayConfirm, setDisplayConfirm] = useState(false);
  const [dataStu, setDataStu] = useState([]);
  const [search, setSearch] = useState("");

  const filterData = dataStu.filter((stu) => {
    if (search === "") {
      return stu;
    } else {
      return (
        stu.fullName.toLowerCase().includes(search) ||
        stu.studentId.toLowerCase().includes(search)
      );
    }
  });

  useEffect(() => {
    get_Student().then((data) => {
      setDataStu(data["data"] ?? []);
    });
  }, []);
  return (
    <div className="content">
      <div className="header-page">
        <h1>Danh Sách Học Viên</h1>

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
          label="Tìm Kiếm Họ Và Tên, ID"
          variant="outlined"
          autoComplete="off"
          fullWidth
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
      </div>
      <table className="table-big">
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
          {filterData.map((stu, index) => {
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

      <ConfirmDelete
        displayConfirm={displayConfirm}
        setDisplayConfirm={setDisplayConfirm}
        rowToAction={rowToAction}
        student
        setDataStu={setDataStu}
      />
      {/* <ListCourse /> */}
    </div>
  );
}
export default Student;
