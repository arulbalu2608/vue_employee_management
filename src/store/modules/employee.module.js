export default {
  namespaced: true,
  state: {
    allEmployee: [],
  },
  mutations: {
    ADD_EMPLOYEE: (state, payload) => {
      state.allEmployee.push(payload);
    },
    EDIT_EMPLOYEE: (state, payload) => {
      let filtereItem = state.allEmployee.filter((item) => {
        if (item.id !== payload.id) return payload;
      });
      state.allEmployee = filtereItem;
      state.allEmployee = [...state.allEmployee, payload];
    },
  },
  actions: {
    addEmployee: ({ commit }, payload) => {
      return commit("ADD_EMPLOYEE", payload);
    },
    editEmployee: ({ commit }, payload) => {
      return commit("EDIT_EMPLOYEE", payload);
    },
  },
};
