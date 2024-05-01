import classNames from "classnames/bind";
import style from "./Courses.module.scss";
import ButtonAdd from "~/Components/ButtonAdd";
import TextField from "@mui/material/TextField";
import { useScrollTrigger } from "@mui/material";
import { useEffect, useState, useTransition } from "react";
import { useLocation } from "react-router-dom";
import ModalFilter from "./ModalFilter";
import { get_StuCourse } from "~/services/API_DBS";
import RowData from "./RowData";

const cx = classNames.bind(style);

function StuCourses() {
  const [displayFormAdd, setDisplayFormAdd] = useState(false);
  const [display, setDisplay] = useState(false);
  const [inputFilter, setInputFilter] = useState({
    searchFlag: false,
    lecturerId: "",
    requiredLevel: "",
    priceS: "",
    priceE: "",
    sortBy: "",
    progressS: "",
    progressE: "",
  });
  const [dataCourse, setDataCourse] = useState([]);
  const location = useLocation();
  const studentId = location.state.studentId;

  useEffect(() => {
    get_StuCourse(studentId, inputFilter).then((data) => {
      setDataCourse(data["data"] ?? []);
    });
  }, [inputFilter]);

  // console.log(dataCourse);
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
                  style={{ textAlign: "center", width: "110px" }}
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
          {dataCourse.map((course, index) => {
            let findCourse = course.studentCourses.find(
              (item) =>
                item.courseId === course.courseId &&
                item.studentId === studentId
            );

            return <RowData course={course} progress={findCourse.progress} />;
          })}
        </tbody>
      </table>
      {display && (
        <ModalFilter
          setDisplay={setDisplay}
          inputFilter={inputFilter}
          setInputFilter={setInputFilter}
        />
      )}
    </div>
  );
}

export default StuCourses;
