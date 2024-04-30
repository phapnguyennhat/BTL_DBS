import classNames from "classnames/bind";
import styles from "./ModalFilter.module.scss";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const cx = classNames.bind(styles);
function ModalFilter({ setDisplay }) {
  return (
    <div
      className={cx("background")}
      onClick={(e) => {
        if (e.target.className === cx("background")) {
          setDisplay(false);
        }
      }}
    >
      <div className={cx("content")}>
        <div className={cx("header")}>
          <h3>Filters</h3>
        </div>
        <form className="container">
          <div className="row">
            <div className="col">
              <TextField
                id="outlined-basic"
                label="ID Giảng Viên"
                variant="standard"
                autoComplete="off"
                fullWidth
              />
            </div>
            <div className="col">
              <FormControl fullWidth variant="standard">
                <InputLabel id="demo-simple-select-label">Giá</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Giá tiền"
                  // onChange={handleChange}
                >
                  <MenuItem value={null}>None</MenuItem>
                  <MenuItem value={"ASC"}>Giá: thấp đến cao</MenuItem>
                  <MenuItem value={"DESC"}>Giá: cao đến thấp</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col">
              <FormControl fullWidth variant="standard">
                <InputLabel id="demo-simple-select-label">
                  Trình độ yêu cầu
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Trình độ yêu cầu"
                  // onChange={handleChange}
                >
                  <MenuItem value={null}>None</MenuItem>
                  <MenuItem value={"Basic"}>Basic</MenuItem>
                  <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"Expert"}>Expert</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ paddingTop: "10px" }}>
              <label style={{ paddingRight: "10px" }}>Khoảng giá: </label>
              <input placeholder="Từ"></input>
              <i class="fa-solid fa-minus" style={{ padding: "0px 10px" }}></i>
              <input placeholder="Đến"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalFilter;
