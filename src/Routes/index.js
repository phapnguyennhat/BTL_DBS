import Home from "~/pages/Home";
import Student from "~/pages/Student";
import Teacher from "~/pages/Teacher";
import StuCourses from "~/pages/StuCourses";
import Courses from "~/pages/Courses";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/student", component: Student },
  { path: "/teacher", component: Teacher },
  { path: "student/courses", component: StuCourses },
  { path: "/courses", component: Courses },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
