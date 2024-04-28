import Home from "~/pages/Home";
import Student from "~/pages/Student";
import Teacher from "~/pages/Teacher";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/student", component: Student },
  { path: "/teacher", component: Teacher },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
