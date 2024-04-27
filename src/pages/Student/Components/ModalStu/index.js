import classNames from "classnames/bind";
import TextField from "@mui/material/TextField";
import { Alert } from "@mui/material";
import Fade from "@mui/material/Fade";

import styles from "./ModalStu.module.scss";
const cx = classNames.bind(styles);
function ModalStu(props) {
  return (
    <div className={cx("background")}>
      <div className={cx("content")}>
        <div className={cx("header")}>
          <h3>Thông tin học viên</h3>
          <Alert variant="outlined" severity="error">
            This is an outlined error Alert.
          </Alert>
        </div>
        <form>
          <div>
            <img src="/student.png"></img>
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
          </div>
        </form>
        <div className={cx("action-btn")}>
          <button>Lưu</button>
          <button>Hủy</button>
        </div>
      </div>
    </div>
  );
}

export default ModalStu;
