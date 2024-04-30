import classNames from "classnames/bind";
import style from "./Courses.module.scss";
import ButtonAdd from "~/Components/ButtonAdd";
import TextField from "@mui/material/TextField";
import { useScrollTrigger } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ModalFilter from "./ModalFilter";

const cx = classNames.bind(style);

function StuCourses() {
  const [displayFormAdd, setDisplayFormAdd] = useState(false);
  const [display, setDisplay] = useState(false);
  const location = useLocation();
  const studentId = location.state.studentId;
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
    }
  };
  return (
    <div className="content">
      <div className="header-page">
        <h1>Danh Sách Khóa Học</h1>
        <ButtonAdd
          text={"+ Thêm Khóa Học"}
          onclick={() => setDisplayFormAdd((prev) => !prev)}
        />
      </div>
      <div className="search action-table">
        <div style={{ width: "25%" }}>
          <TextField
            id="outlined-basic"
            label="Tìm Kiếm"
            variant="outlined"
            autoComplete="off"
            fullWidth
          />
        </div>
        <button onClick={() => setDisplay(true)}>
          Filter
          <i class="fa-solid fa-filter"></i>
        </button>
      </div>
      <table className="table-big">
        <thead>
          <th>Mã Khóa Học</th>
          <th>Tên Khóa Học</th>
          <th>Giá Tiền</th>
          <th>ID Giảng Viên</th>
          <th>Trình Độ Yêu Cầu</th>
          <th>Tiến Độ</th>
          <th>Thao Tác</th>
        </thead>
        <tbody>
          {displayFormAdd && (
            <tr>
              <td>
                <input
                  style={{ textAlign: "center" }}
                  placeholder="ID Khóa Học"
                  onKeyDown={handleKeyDown}
                  autoFocus
                ></input>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>0.00</td>
              <td></td>
            </tr>
          )}
          <tr>
            <td>KH0000001</td>
            <td>Lap trinh python co ban</td>
            <td>99.99</td>
            <td>123456789</td>
            <td>basic</td>
            <td>60.0</td>
            <td className="action-data">
              <button>
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
              <button>
                {" "}
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {display && <ModalFilter setDisplay={setDisplay} />}
    </div>
  );
}

export default StuCourses;
