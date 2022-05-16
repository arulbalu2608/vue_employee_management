import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/Login";
import HomeView from "../views/Home/HomeView.vue";
import AddEmployee from "../views/AddEmployee";
import EditEmployee from "../views/EditEmployee";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },

  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add-employee",
    name: "addEmployee",
    component: AddEmployee,
  },
  {
    path: "/edit-employee",
    name: "editEmployee",
    component: EditEmployee,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
