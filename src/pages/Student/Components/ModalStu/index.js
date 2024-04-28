import classNames from "classnames/bind";
import TextField from "@mui/material/TextField";
import { Alert } from "@mui/material";
import Fade from "@mui/material/Fade";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import styles from "./ModalStu.module.scss";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { randomNineDigits } from "~/functions";
import { get_Student, post_Student, update_Student } from "~/services/API_DBS";
const cx = classNames.bind(styles);

function ModalStu({ setDisplayModal, rowToAction, dataStu, setDataStu }) {
  const [displayError, setDisplayError] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [inputForm, setInputForm] = useState([]);
  const closeModal = () => {
    setDisplayModal(false);
  };
  useEffect(() => {
    let defaultInput = {
      studentId: randomNineDigits(),
      userName: "",
      password: "",
      fullName: "",
      gender: "Male",
      email: "",
      phoneNumber: "",
      addr: "",
      bdate: "2024-04-28",
    };
    let findStu = dataStu.find((item) => item.studentId === rowToAction);
    if (findStu) setInputForm({ ...findStu });
    else {
      setInputForm({ ...defaultInput });
    }
  }, [rowToAction]);

  const isValid = () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPhoneNumber = /^0\d{9}$/;
    if (Object.values(inputForm).includes("")) {
      setMsgError("Vui lòng không để trống thông tin");
      setDisplayError(true);
      setTimeout(() => {
        setDisplayError(false);
      }, 3000);
      return false;
    } else if (!regexEmail.test(inputForm.email)) {
      setMsgError("Email không hợp lệ");
      setDisplayError(true);
      setTimeout(() => {
        setDisplayError(false);
      }, 3000);
      return false;
    } else if (!regexPhoneNumber.test(inputForm.phoneNumber)) {
      setMsgError("Số điện thoại không hợp lệ");
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
        update_Student(inputForm)
          .then(() => {
            setTimeout(() => {
              get_Student().then((data) => {
                setDataStu(data["data"] ?? []);
              });
            }, 500); // Đợi 1 giây trước khi gọi get_Student
          })
          .catch((error) => console.error("Error:", error));
      } else {
        post_Student(inputForm)
          .then(() => {
            get_Student().then((data) => {
              setDataStu(data["data"] ?? []);
            });
          })
          .catch((error) => console.error("Error:", error)); // Log lỗi nếu có
      }
      closeModal();
    }
  };

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
          <h3>Thông tin học viên</h3>
          <Fade in={displayError}>
            <Alert variant="outlined" severity="error">
              {msgError}
            </Alert>
          </Fade>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={cx("form-data")}>
            <div>
              <img alt="not found" loading="lazing" src="/student.png"></img>
            </div>
            <div className="container">
              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col">
                  <TextField
                    id="outlined-basic"
                    label="UserName"
                    variant="standard"
                    fullWidth
                    required
                    autoComplete="off"
                    name="userName"
                    value={inputForm.userName}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="col">
                  <TextField
                    id="outlined-basic"
                    label="Mật Khẩu"
                    variant="standard"
                    fullWidth
                    required
                    autoComplete="off"
                    name="password"
                    value={inputForm.password}
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <div className="row align-items-center row-cols-1 row-cols-lg-2">
                <div className="col">
                  <TextField
                    id="outlined-basic"
                    label="Họ Và Tên"
                    variant="standard"
                    fullWidth
                    required
                    autoComplete="off"
                    name="fullName"
                    value={inputForm.fullName}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="col">
                  <label>Giới Tính:</label>
                  <select
                    name="gender"
                    value={inputForm.gender}
                    onChange={onChangeInput}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="standard"
                    fullWidth
                    required
                    autoComplete="off"
                    name="email"
                    value={inputForm.email}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="col">
                  <TextField
                    id="outlined-basic"
                    label="Số Điện Thoại"
                    variant="standard"
                    fullWidth
                    required
                    autoComplete="off"
                    name="phoneNumber"
                    value={inputForm.phoneNumber}
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <FormControl sx={{ marginTop: "8px" }}>
                      <DatePicker
                        label="Ngày Sinh"
                        name="bdate"
                        format="YYYY-MM-DD"
                        value={dayjs(inputForm.bdate, "YYYY-MM-DD")}
                        onChange={onChangeInput}
                      />
                    </FormControl>
                  </LocalizationProvider>
                </div>
                <div className="col">
                  <TextField
                    id="outlined-basic"
                    label="Địa Chỉ"
                    variant="standard"
                    fullWidth
                    required
                    autoComplete="off"
                    sx={{ marginTop: "8px" }}
                    name="addr"
                    value={inputForm.addr}
                    onChange={onChangeInput}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={cx("action-btn")}>
            <button onClick={handleSubmit} type="submit">
              Lưu
            </button>
            <button onClick={closeModal}>Hủy</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalStu;
