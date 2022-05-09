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
  },
  mutations: {},
  actions: {},
  modules: {
    employeeModule,
  },
});
