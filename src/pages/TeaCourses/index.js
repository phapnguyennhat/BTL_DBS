import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { get_TeaCourse } from "~/services/API_DBS";
import TextField from "@mui/material/TextField";

function TeaCourses() {
  const [dataCourse, setDataCourse] = useState([]);
  const location = useLocation();
  const lectureId = location.state.lectureId;
  useEffect(() => {
    get_TeaCourse(lectureId).then((data) => {
      setDataCourse(data["data"] ?? []);
    });
  }, []);
  console.table(dataCourse);
  return (
    <div className="content">
      <div className="header-page">
        <h1>Danh Sách Khóa Học</h1>
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
          <th>Mã Khóa Học</th>
          <th>Tên Khóa Học</th>
          <th>Số Học Viên</th>
          <th>Doanh Thu</th>
        </thead>
        <tbody>
          {dataCourse.map((course) => {
            return (
              <tr>
                <td>{course.courseId}</td>
                <td>{course.courseName}</td>
                <td>{course.studentCount}</td>
                <td>{course.totalPrice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TeaCourses;
