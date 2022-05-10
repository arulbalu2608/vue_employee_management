import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import AddEmployee from "../views/AddEmployee";
import EditEmployee from "../views/EditEmployee";

const routes = [
  {
    path: "/",
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
