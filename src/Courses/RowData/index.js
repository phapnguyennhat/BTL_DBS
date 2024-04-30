function RowData({ course }) {
  return (
    <tr>
      <td>{course.courseId}</td>
      <td>{course.courseName}</td>
      <td>{course.topic}</td>
      <td>{course.requiredLevel}</td>
      <td>{course.price}</td>
      <td>{course.lecturerId}</td>
      <td>{course.languages}</td>
      <td style={{ verticalAlign: "middle" }} className="btn-action-data">
        <button
          onClick={() => {
            // setRowToAction(studentId);
            // setDisplayModal(true);
          }}
        >
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            // setDisplayConfirm(true);
            // setRowToAction(studentId);
          }}
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default RowData;
