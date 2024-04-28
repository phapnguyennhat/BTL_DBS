function RowData({
  lectureId,
  fullName,
  gender,
  email,
  phoneNumber,
  degree,
  major,
}) {
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
          <ul class="dropdown-menu" style={{}}>
            <li>
              <a class="dropdown-item" href="">
                DS Khóa Học
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                DS RoadMap
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
}

export default RowData;
