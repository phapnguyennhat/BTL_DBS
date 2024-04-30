import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

function RowData({
  studentId,
  fullName,
  gender,
  email,
  bdate,
  addr,
  phoneNumber,
  setDisplayConfirm,
  setRowToAction,
  setDisplayModal,
}) {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{studentId}</td>
      <td>{fullName}</td>
      <td>{gender}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{bdate}</td>
      <td>{addr}</td>
      <td className="action-data">
        <button
          onClick={() => {
            setRowToAction(studentId);
            setDisplayModal(true);
          }}
        >
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            setDisplayConfirm(true);
            setRowToAction(studentId);
          }}
        >
          <i class="fa-solid fa-trash"></i>
        </button>
        {/* <button>
          <i class="fa-solid fa-ellipsis"></i>
        </button> */}
        <div class="dropdown">
          <button data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-ellipsis"></i>
          </button>
          <ul class="dropdown-menu" style={{}}>
            <li>
              <button
                onClick={() =>
                  navigate("courses", {
                    state: { studentId: studentId },
                  })
                }
                class="dropdown-item"
              >
                DS Khóa Học
              </button>
            </li>
            <li>
              <button class="dropdown-item">DS Hóa Đơn</button>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
}

export default RowData;
