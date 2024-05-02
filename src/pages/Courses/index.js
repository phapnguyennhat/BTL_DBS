import { useEffect, useState } from "react";
import ButtonAdd from "~/Components/ButtonAdd";
import TextField from "@mui/material/TextField";
import { get_courses } from "~/services/API_DBS";
import RowData from "./Components/RowData";
import ModalCourse from "./Components/ModalCourse";
import ConfirmDelete from "~/Components/ConfirmDelete";

function Courses() {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayConfirm, setDisplayConfirm] = useState(false);
  const [dataCourse, setDataCourse] = useState([]);
  const [search, setSearch] = useState("");
  const [rowToAction, setRowToAction] = useState(null);

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

  // console.table(dataCourse);

  useEffect(() => {
    get_courses().then((data) => {
      setDataCourse(data["data"] ?? []);
    });
  }, []);
  return (
    <div className="content">
      <div className="header-page">
        <h1>Danh Sách Khóa Học</h1>

        <ButtonAdd
          text={"+ Thêm Khoá Học"}
          onclick={() => {
            setDisplayModal(true);
            setRowToAction(null);
          }}
        />
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
          <th style={{ width: "100px" }}>Ngôn Ngữ</th>
          <th>Thao Tác</th>
        </thead>
        <tbody>
          {filterData.map((course, index) => {
            return (
              <RowData
                course={course}
                setDisplayConfirm={setDisplayConfirm}
                setRowToAction={setRowToAction}
                setDisplayModal={setDisplayModal}
              />
            );
          })}
        </tbody>
      </table>
      {displayModal && (
        <ModalCourse
          setDisplayModal={setDisplayModal}
          rowToAction={rowToAction}
          dataCourse={dataCourse}
          setDataCourse={setDataCourse}
        />
      )}

      {displayConfirm && (
        <ConfirmDelete
          displayConfirm={displayConfirm}
          setDisplayConfirm={setDisplayConfirm}
          rowToAction={rowToAction}
          course
          setDataCourse={setDataCourse}
        />
      )}
    </div>
  );
}

export default Courses;
