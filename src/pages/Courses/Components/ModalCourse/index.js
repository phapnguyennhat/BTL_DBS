import { useState, useEffect } from "react";
import { randomIdCourse } from "~/functions";
import { get_courses, post_Course, update_Course } from "~/services/API_DBS";
import classNames from "classnames/bind";
import styles from "./ModalCourse.module.scss";
import { Alert } from "@mui/material";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SelectLang from "../SelectLang";

const cx = classNames.bind(styles);
function ModalCourse({
  setDisplayModal,
  rowToAction,
  dataCourse,
  setDataCourse,
}) {
  const [displayError, setDisplayError] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [inputForm, setInputForm] = useState({});

  const closeModal = () => {
    setDisplayModal(false);
  };
  const isValid = () => {
    if (Object.values(inputForm).includes("")) {
      setMsgError("Vui lòng không để trống thông tin");
      setDisplayError(true);
      setTimeout(() => {
        setDisplayError(false);
      }, 3000);
      return false;
    }
    return true;
  };
  const onChangeInput = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid()) {
      if (rowToAction) {
        update_Course(inputForm)
          .then(() => {
            setTimeout(() => {
              get_courses().then((data) => {
                setDataCourse(data["data"] ?? []);
              });
            }, 500);
          })
          .catch((error) => console.error("Error:", error));
      } else {
        post_Course(inputForm)
          .then(() => {
            get_courses().then((data) => {
              setDataCourse(data["data"] ?? []);
            });
          })
          .catch((error) => console.log("Error: ", error));
      }
      closeModal();
    }
  };

  console.log(inputForm);

  useEffect(() => {
    let findCourse = dataCourse.find(
      (course) => course.courseId === rowToAction
    );
    if (findCourse) {
      setInputForm(findCourse);
    } else {
      setInputForm({
        courseId: randomIdCourse(),
        courseName: "",
        description: "",
        topic: "",
        requiredLevel: "",
        price: "",
        lecturerId: "",
        languages: [],
      });
    }
  }, [rowToAction]);
  return (
    <div
      className={cx("background")}
      onClick={(e) => {
        if (e.target.className === cx("background")) {
          closeModal();
        }
      }}
    >
      <div className={cx("content")}>
        <div className={cx("header")}>
          <h3>Thông Tin Khóa Học</h3>
          <Fade in={displayError}>
            <Alert variant="outlined" severity="error">
              {msgError}
            </Alert>
          </Fade>
        </div>
        <form>
          <div>
            <img src="/course.png" alt="not found"></img>
          </div>
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col">
                <TextField
                  id="outlined-basic"
                  label="Tên Khóa Học"
                  variant="standard"
                  fullWidth
                  required
                  autoComplete="off"
                  name="courseName"
                  value={inputForm.courseName}
                  onChange={onChangeInput}
                />
              </div>
              <div className="col">
                <TextField
                  id="outlined-basic"
                  label="Chủ Đề"
                  variant="standard"
                  fullWidth
                  required
                  autoComplete="off"
                  name="topic"
                  value={inputForm.topic}
                  onChange={onChangeInput}
                />
              </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col">
                <TextField
                  id="outlined-basic"
                  label="Mã Giảng Viên"
                  variant="standard"
                  fullWidth
                  required
                  autoComplete="off"
                  name="lecturerId"
                  value={inputForm.lecturerId}
                  onChange={onChangeInput}
                />
              </div>
              <div className="col">
                <TextField
                  id="outlined-basic"
                  label="Giá"
                  variant="standard"
                  fullWidth
                  required
                  autoComplete="off"
                  name="price"
                  value={inputForm.price}
                  onChange={onChangeInput}
                />
              </div>
            </div>

            <div className="row align-items-center row-cols-1 row-cols-lg-2 ">
              <div className="col">
                <FormControl fullWidth variant="standard">
                  <InputLabel id="demo-simple-select-label">
                    Trình Độ Yêu Cầu
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={`${inputForm.requiredLevel}`}
                    // value={"Other"}
                    label="Trình Độ Yêu Cầu"
                    onChange={(e) =>
                      setInputForm({
                        ...inputForm,
                        requiredLevel: e.target.value,
                      })
                    }
                  >
                    <MenuItem value={"Beginner"}>Beginner</MenuItem>
                    <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                    <MenuItem value={"Expert"}>Expert</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col">
                <SelectLang inputForm={inputForm} setInputForm={setInputForm} />
              </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col-12">
                <TextField
                  id="outlined-basic"
                  label="Mô tả"
                  variant="standard"
                  fullWidth
                  required
                  autoComplete="off"
                  name="description"
                  value={inputForm.description}
                  onChange={onChangeInput}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalCourse;
