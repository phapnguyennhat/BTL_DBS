import classNames from "classnames/bind";
import styles from "./ModalFilter.module.scss";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const cx = classNames.bind(styles);
function ModalFilter({
  setDisplay,
  filtered,
  setFiltered,
  inputFilter,
  setInputFilter,
}) {
  const colectData = (event) => {
    setInputFilter((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };
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
                name="id_teacher"
                onChange={colectData}
              />
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
                  name="requered_level"
                  // onChange={handleChange}
                  onChange={colectData}
                >
                  <MenuItem value={null}>None</MenuItem>
                  <MenuItem value={"Beginer"}>Beginer</MenuItem>
                  <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"Expert"}>Expert</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col-9 range-input">
              <label style={{ paddingRight: "10px" }}>Khoảng giá: </label>
              <input name="price_from" placeholder="Từ $"></input>
              <i class="fa-solid fa-minus" style={{ padding: "0px 10px" }}></i>
              <input name="price_to" placeholder="Đến $"></input>
            </div>
            <div className="col-3">
              <FormControl fullWidth variant="standard">
                <InputLabel id="demo-simple-select-label">Giá</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Giá tiền"
                  name="order_price"
                  onChange={colectData}
                  // onChange={handleChange}
                >
                  <MenuItem value={null}>None</MenuItem>
                  <MenuItem value={"ASC"}>Giá: thấp đến cao</MenuItem>
                  <MenuItem value={"DESC"}>Giá: cao đến thấp</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col-9 range-input">
              <label style={{ paddingRight: "10px" }}>Khoảng Tiến Độ: </label>
              <input name="progress_from" placeholder="Từ %"></input>
              <i class="fa-solid fa-minus" style={{ padding: "0px 10px" }}></i>
              <input name="progress_to" placeholder="Đến %"></input>
            </div>
            <div className="col-3">
              {/* <FormControl fullWidth variant="standard">
                <InputLabel id="demo-simple-select-label">Tiến Độ</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Tiến Độ"
                  name="order_progress"
                  // onChange={handleChange}
                >
                  <MenuItem value={null}>None</MenuItem>
                  <MenuItem value={"ASC"}>Tiến Độ: thấp đến cao</MenuItem>
                  <MenuItem value={"DESC"}>Tiến Độ: cao đến thấp</MenuItem>
                </Select>
              </FormControl> */}
            </div>
          </div>
          <div className={cx("action-btn")}>
            {filtered ? <button>Bỏ Lọc</button> : <button>Áp Dụng</button>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalFilter;
