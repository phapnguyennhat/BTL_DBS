import classNames from "classnames/bind";
import styles from "./Teacher.module.scss";
import ButtonAdd from "~/Components/ButtonAdd";
import TextField from "@mui/material/TextField";
import RowData from "./Components/RowData";
import { useEffect, useState } from "react";
import ModalTea from "./Components/ModalTea";
import { GET_TEACHER, get_Teacher } from "~/services/API_DBS";

const cx = classNames.bind(styles);

function Teacher() {
  const [displayModal, setDisplayModal] = useState(false);
  const [rowToAction, setRowToAction] = useState(null);
  const [dataTea, setDataTea] = useState([]);
  useEffect(() => {
    get_Teacher().then((data) => {
      setDataTea(data["data"] ?? []);
    });
  }, []);
  return (
    <div className="content">
      <div className="header-page">
        <h1>Danh Sách Giảng Viên</h1>
        <ButtonAdd
          text={"+ Thêm Giảng Viên"}
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
      <table className="table-big">
        <thead>
          <th>ID</th>
          <th>Họ Và Tên</th>
          <th> Giới Tính</th>
          <th>Email</th>
          <th>Số Điện Thoại</th>

          <th>Bằng Cấp</th>
          <th>Chuyên Ngành</th>
          <th>Thao tác</th>
        </thead>
        <tbody>
          {dataTea.map((teacher, index) => {
            return (
              <RowData
                lectureId={teacher.lecturerId}
                fullName={teacher.fullName}
                gender={teacher.gender}
                email={teacher.email}
                phoneNumber={teacher.phoneNumber}
                degree={teacher.degree}
                major={teacher.major}
              />
            );
          })}
        </tbody>
      </table>
      {displayModal && (
        <ModalTea setDisplayModal={setDisplayModal} rowToAction={rowToAction} />
      )}
    </div>
  );
}

export default Teacher;
