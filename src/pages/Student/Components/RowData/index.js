import classNames from "classnames/bind";

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
