import classNames from "classnames/bind";
import styles from "./RowData.module.scss";

const cx = classNames.bind(styles);
function RowData() {
  return (
    <tr>
      <td>123456789</td>
      <td>Nguyễn Nhật Pháp</td>
      <td>Phap213@gmail.com</td>
      <td>0123456789</td>
      <td>Phap123</td>
      <td className={cx("action-data")}>
        <button>
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button>
          <i class="fa-solid fa-trash"></i>
        </button>
        {/* <button>
          <i class="fa-solid fa-ellipsis"></i>
        </button> */}
        <div class="dropdown">
          <button data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-ellipsis"></i>
          </button>
          <ul class="dropdown-menu" style={{ fontSize: "1.6rem" }}>
            <li>
              <a class="dropdown-item" href="abc">
                DS Khóa Học
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                DS Hóa Đơn
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
}

export default RowData;
