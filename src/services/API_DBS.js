const POST_STUDENT = "http://localhost:8080/api/v1/students/create-student";

const GET_STUDENT = "http://localhost:8080/api/v1/students/";
const DELETE_STUDENT = "http://localhost:8080/api/v1/students/";

const GET_TEACHER = "http://localhost:8080/api/v1/lecturers/";
const POST_TEACHER = "http://localhost:8080/api/v1/lecturers/create-lecturer";
const DELETE_TEACHER = "http://localhost:8080/api/v1/lecturers/";

export const get_Student = async () => {
  const response = await fetch(GET_STUDENT);
  return response.json();
};

export const get_StuCourse = async (studentId) => {
  const url = GET_STUDENT + studentId + "/courses";
  const response = await fetch(url);
  return response.json();
};

export const update_Student = async (data) => {
  let url = GET_STUDENT + data.studentId;
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("NetWork response was not ok: " + response.statusText);
    }
    return response.json();
  });
};
export const post_Student = async (data) => {
  const response = await fetch(POST_STUDENT, {
    method: "POST", // Phương thức HTTP
    headers: {
      "Content-Type": "application/json", // Nội dung của request là JSON
    },
    body: JSON.stringify(data), // Chuyển đổi đối tượng JavaScript thành chuỗi JSON
  });
  const post = await response.json();
  return post;
};

export const delete_Student = async (idData) => {
  let url = DELETE_STUDENT + idData;
  const response = await fetch(url, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Network response was not ok: " + response.statusText);
  }
  return response.json();
};

export const get_Teacher = async () => {
  const response = await fetch(GET_TEACHER);
  return response.json();
};

export const update_Teacher = async (data) => {
  let url = GET_TEACHER + data.lecturerId;
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("NetWork response was not ok: " + response.statusText);
    }
    return response.json();
  });
};

export const post_Teacher = async (data) => {
  const response = await fetch(POST_TEACHER, {
    method: "POST", // Phương thức HTTP
    headers: {
      "Content-Type": "application/json", // Nội dung của request là JSON
    },
    body: JSON.stringify(data), // Chuyển đổi đối tượng JavaScript thành chuỗi JSON
  });
  const post = await response.json();
  return post;
};

export const delete_Teacher = async (idData) => {
  let url = DELETE_TEACHER + idData;
  const response = await fetch(url, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok" + response.statusText);
  }
  return response.json();
};
