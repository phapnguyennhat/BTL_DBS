import classNames from "classnames/bind";
import TextField from "@mui/material/TextField";
import { Alert } from "@mui/material";
import Fade from "@mui/material/Fade";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styles from "./ModalTea.module.scss";
import { useState } from "react";
import SelectMajor from "../SelectMajor";
const cx = classNames.bind(styles);

function ModalTea({ setDisplayModal, rowToAction }) {
  const [displayError, setDisplayError] = useState(false);
  const [msgError, setMsgError] = useState("");
  console.log(setDisplayModal);
  const closeModal = () => {
    setDisplayModal(false);
  };
  const isValid = () => {};

  const handleSubmit = () => {
    closeModal();
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
              This is an outlined error Alert.
            </Alert>
          </Fade>
        </div>
        <form>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8029l2sYlsqc46yGEHnc9Lzp5Eus5VaR2g&s"></img>
          </div>
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col">
                <TextField
                  id="outlined-basic"
                  label="UserName"
                  variant="standard"
                  fullWidth
                />
              </div>
              <div className="col">
                <TextField
                  id="outlined-basic"
                  label="PassWord"
                  variant="standard"
                  fullWidth
                />
              </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="standard"
                  fullWidth
                />
              </div>
              <div className="col">
                <TextField
                  id="outlined-basic"
                  label="Số Điện Thoại"
                  variant="standard"
                  fullWidth
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
                    label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={"Cử Nhân"}>Cử Nhân</MenuItem>
                    <MenuItem value={"Thạc Sĩ"}>Thạc Sĩ</MenuItem>
                    <MenuItem value={"Tiến Sĩ"}>Tiến Sĩ</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col">
                <div className={cx("option-major")}>
                  {" "}
                  <SelectMajor />
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className={cx("action-btn")}>
          <button>Lưu</button>
          <button onClick={closeModal}>Hủy</button>
        </div>
      </div>
    </div>
  );
}

export default ModalTea;
