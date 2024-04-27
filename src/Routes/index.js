import Home from "~/pages/Home";
import Student from "~/pages/Student";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/student", component: Student },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
