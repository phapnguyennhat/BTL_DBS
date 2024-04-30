import Home from "~/pages/Home";
import Student from "~/pages/Student";
import Teacher from "~/pages/Teacher";
import StuCourses from "~/pages/StuCourses";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/student", component: Student },
  { path: "/teacher", component: Teacher },
  { path: "student/courses", component: StuCourses },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
