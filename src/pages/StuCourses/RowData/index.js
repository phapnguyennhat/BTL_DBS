import { useState } from "react";

function RowData({ course, progress }) {
  const [displayEdit, setDisplayEdit] = useState(false);
  const [inputCourse, setInputCourse] = useState("");

  return (
    <tr>
      {displayEdit ? (
        <input
          value={inputCourse}
          style={{ textAlign: "center", width: "110px" }}
          autoFocus
          onChange={(e) => setInputCourse(e.target.value)}
        ></input>
      ) : (
        <td>{course.courseId}</td>
      )}
      <td>{course.courseName}</td>
      <td>{course.price}</td>
      <td>{course.lecturerId}</td>
      <td>{course.requiredLevel}</td>
      <td>{progress}</td>
      {/* <td className="action-data">
        <button
          onClick={() => {
            setDisplayEdit((prev) => !prev);
            setInputCourse(course.courseId);
          }}
        >
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button>
          <i class="fa-solid fa-trash"></i>
        </button>
      </td> */}
    </tr>
  );
}

export default RowData;
