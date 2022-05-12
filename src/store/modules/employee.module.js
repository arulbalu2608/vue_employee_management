export default {
  namespaced: true,
  state: {
    allEmployee: [
      {
        id: "E101",
        name: "prasad",
        email: "prasad@test.com",
        mobileno: "9876543210",
        skills: "React js",
      },
    ],
  },
  mutations: {
    ADD_EMPLOYEE: (state, new_employee_details) => {
      state.allEmployee.push(new_employee_details);
    },
    EDIT_EMPLOYEE: (state, updated_employee_details) => {
      let filteredList = state.allEmployee.filter((item) => {
        if (item.id !== updated_employee_details.id)
          return updated_employee_details;
      });
      state.allEmployee = filteredList;
      state.allEmployee = [...state.allEmployee, updated_employee_details];
    },
    DELETE_EMPLOYEE: (state, employeID) => {
      let filteredList = state.allEmployee.filter((item) => {
        if (item.id !== employeID) return employeID;
      });
      state.allEmployee = filteredList;
    },
  },
  actions: {
    addEmployee: ({ commit }, payload) => {
      return commit("ADD_EMPLOYEE", payload);
    },
    editEmployee: ({ commit }, payload) => {
      return commit("EDIT_EMPLOYEE", payload);
    },
    deleteEmployee: ({ commit }, payload) => {
      return commit("DELETE_EMPLOYEE", payload);
    },
  },
};
