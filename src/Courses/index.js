import { useEffect, useState } from "react";
import ButtonAdd from "~/Components/ButtonAdd";
import TextField from "@mui/material/TextField";
import { get_courses } from "~/services/API_DBS";
import RowData from "./RowData";

function Courses() {
  const [dataCourse, setDataCourse] = useState([]);
  const [search, setSearch] = useState("");

  const filterData = dataCourse.filter((item) => {
    if (search === "") {
      return item;
    } else {
      return (
        item.courseId.toLowerCase().includes(search) ||
        item.courseName.toLowerCase().includes(search)
      );
    }
  });

  useEffect(() => {
    get_courses().then((data) => {
      setDataCourse(data["data"] ?? []);
    });
  }, []);
  return (
    <div className="content">
      <div className="header-page">
        <h1>Danh Sách Khóa Học</h1>

        <ButtonAdd text={"+ Thêm Khoá Học"} />
      </div>
      <div className="search">
        <TextField
          id="outlined-basic"
          label="Tìm Kiếm Tên Khóa Học Hoặc Mã Khóa Học"
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
          <th>Mã Khóa Học</th>
          <th style={{ width: "200px" }}> Tên Khóa Học</th>
          <th> Chủ Đề</th>
          <th>Trình Độ Yêu Cầu</th>
          <th>Giá</th>
          <th>ID Giảng Viên</th>
          <th>Ngôn Ngữ</th>
          <th>Thao Tác</th>
        </thead>
        <tbody>
          {filterData.map((course, index) => {
            return <RowData course={course} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Courses;
