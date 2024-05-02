import { useNavigate } from "react-router-dom";

function RowData({
  lectureId,
  fullName,
  gender,
  email,
  phoneNumber,
  degree,
  major,
  setDisplayConfirm,
  setRowToAction,
  setDisplayModal,
}) {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{lectureId}</td>
      <td>{fullName}</td>
      <td>{gender}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{degree}</td>
      <td>{major}</td>
      <td className="action-data">
        <button
          onClick={() => {
            setRowToAction(lectureId);
            setDisplayModal(true);
          }}
        >
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            setDisplayConfirm(true);
            setRowToAction(lectureId);
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
                    state: { lectureId: lectureId },
                  })
                }
                class="dropdown-item"
              >
                DS Khóa Học
              </button>
            </li>
            {/* <li>
              <a class="dropdown-item" href="#">
                DS RoadMap
              </a>
            </li> */}
          </ul>
        </div>
      </td>
    </tr>
  );
}

export default RowData;
