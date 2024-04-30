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
import dayjs from "dayjs";

import styles from "./ModalTea.module.scss";
import { useEffect, useState } from "react";
import SelectMajor from "../SelectMajor";
import { findByDisplayValue } from "@testing-library/react";
import { isValidAge, randomNineDigits } from "~/functions";
import {
  get_Student,
  get_Teacher,
  post_Teacher,
  update_Teacher,
} from "~/services/API_DBS";
const cx = classNames.bind(styles);

function ModalTea({ setDisplayModal, rowToAction, dataTea, setDataTea }) {
  const [displayError, setDisplayError] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [inputForm, setInputForm] = useState({});
  useEffect(() => {
    let findTea = dataTea.find((tea) => tea.lecturerId === rowToAction);
    if (findTea) {
      setInputForm(findTea);
    } else {
      setInputForm({
        lecturerId: randomNineDigits(),
        userName: "",
        password: "",
        fullName: "",
        gender: "",
        email: "",
        phoneNumber: "",
        degree: "",
        major: "",
        bdate: "2024-04-28",
        addr: "",
      });
    }
  }, [rowToAction]);
  const closeModal = () => {
    setDisplayModal(false);
  };
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
    } else if (!isValidAge(inputForm.bdate)) {
      setMsgError("Giảng Viên chưa đủ 18 tuổi");
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
  console.log(inputForm.major);
  console.log(typeof inputForm.major);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid()) {
      if (rowToAction) {
        update_Teacher(inputForm)
          .then(() => {
            setTimeout(() => {
              get_Teacher().then((data) => {
                setDataTea(data["data"] ?? []);
              });
            }, 500);
          })
          .catch((error) => console.error("Error:", error));
      } else {
        post_Teacher(inputForm)
          .then(() => {
            get_Teacher().then((data) => {
              setDataTea(data["data"] ?? []);
            });
          })
          .catch((error) => console.log("Error: ", error));
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
          <h3>Thông tin Giảng Viên</h3>
          <Fade in={displayError}>
            <Alert variant="outlined" severity="error">
              {msgError}
            </Alert>
          </Fade>
        </div>
        <form>
          <div>
            <img
              alt="not found"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8029l2sYlsqc46yGEHnc9Lzp5Eus5VaR2g&s"
            ></img>
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
                {/* <label>Giới Tính: </label>
                <select
                  name="gender"
                  value={inputForm.gender}
                  onChange={onChangeInput}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select> */}
                <FormControl fullWidth variant="standard">
                  <InputLabel id="demo-simple-select-label">
                    Giới Tính
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={`${inputForm.gender}`}
                    // value={"Other"}
                    label="Giới Tính"
                    onChange={(e) =>
                      setInputForm({
                        ...inputForm,
                        gender: e.target.value,
                      })
                    }
                  >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                </FormControl>
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
            <div className="row align-items-center row-cols-1 row-cols-lg-2 ">
              <div className="col">
                <FormControl fullWidth variant="standard">
                  <InputLabel id="demo-simple-select-standard-label">
                    Bằng Cấp
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select"
                    // value={age}
                    label="degree"
                    // onChange={handleChange}
                    required
                    name="degree"
                    value={`${inputForm.degree}`}
                    onChange={onChangeInput}
                  >
                    <MenuItem value={"Cử nhân"}>Cử nhân</MenuItem>
                    <MenuItem value={"Thạc sĩ"}>Thạc sĩ</MenuItem>
                    <MenuItem value={"Tiến sĩ"}>Tiến sĩ</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col">
                <div className={cx("option-major")}>
                  <SelectMajor
                    inputForm={inputForm}
                    onChangeInput={onChangeInput}
                  />
                </div>
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
                      onChange={(newDate) => {
                        setInputForm({
                          ...inputForm,
                          bdate: dayjs(newDate).format("YYYY-MM-DD"),
                        });
                      }}
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
        </form>
        <div className={cx("action-btn")}>
          <button type="submit" onClick={handleSubmit}>
            Lưu
          </button>
          <button onClick={closeModal}>Hủy</button>
        </div>
      </div>
    </div>
  );
}

export default ModalTea;
