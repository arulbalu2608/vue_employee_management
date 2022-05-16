import { createStore } from "vuex";
import employeeModule from "./modules/employee.module";

export default createStore({
  state: {
    employeeState: employeeModule.state,
  },
  getters: {
    getAllEmployee: (state) => {
      return state.employeeState.allEmployee;
    },
    getSuperAdmin: (state) => {
      return state.employeeState.superAdmin;
    },
    getSubAdmin: (state) => {
      return state.employeeState.subAdmin;
    },
    getisLoggedIn: (state) => {
      return state.employeeState.isLoggedIn;
    },
    getisSuperAdmin: (state) => {
      return state.employeeState.isSuperAdmin;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    employeeModule,
  },
});
